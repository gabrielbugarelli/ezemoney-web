
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFcq0N0EyZ_qVLx6j_4tgFUPdMMsRkZew",
  authDomain: "kashflow-test.firebaseapp.com",
  projectId: "kashflow-test",
  storageBucket: "kashflow-test.appspot.com",
  messagingSenderId: "471805840369",
  appId: "1:471805840369:web:082c70dc8db833eeea1250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth();

export { app, auth, database };
