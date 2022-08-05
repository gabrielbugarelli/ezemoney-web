
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoxmBxtUG0vgabVgi2JSAfA4YqV_Jb9ow",
  authDomain: "ezemoney-web.firebaseapp.com",
  projectId: "ezemoney-web",
  storageBucket: "ezemoney-web.appspot.com",
  messagingSenderId: "546123846145",
  appId: "1:546123846145:web:7011a3e546c90c1bb96600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth();

export { app, auth, database };
