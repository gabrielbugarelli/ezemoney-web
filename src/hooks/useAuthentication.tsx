import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { auth, firebase } from '../services/firebaseConnection';

type UserType = {
  id: string;
  name: string;
  avatar: string | null;
}

type AuthenticationContextType = {
  user: UserType | undefined;
  signWithGoogle: () => Promise<void>;
}

type AuthenticationProviderProps = {
  children: ReactElement;
}

const AuthenticationContext = createContext({} as AuthenticationContextType);

// Provider da autenticação
export const AuthenticationProvider = ({children}: AuthenticationProviderProps) => {
  const [ user, setUser ] = useState<UserType>();
  
  // Recupera estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user => {
      if(user) {
        const { uid, displayName, photoURL } = user;
  
        if(!displayName) {
          throw new Error("Use a name email!");
        }
  
        const data: UserType = {
          id: uid,
          name: displayName,
          avatar: photoURL
        }
  
        setUser(data);
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  const signWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    
    if(result.user) {
      const { uid, displayName, photoURL } = result.user;

      if(!displayName) {
        throw new Error("Use a name email!");
      }

      const data: UserType = {
        id: uid,
        name: displayName,
        avatar: photoURL
      }

      setUser(data);
    }
  }

  return (
    <AuthenticationContext.Provider value={ { user, signWithGoogle } }>
      {children}
    </AuthenticationContext.Provider>
  )
}

//Hook da autenticação
export const useAuthentication = () => {
  const value = useContext(AuthenticationContext);

  return value;
}
