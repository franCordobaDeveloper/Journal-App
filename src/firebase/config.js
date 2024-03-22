// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5DTFROqfaKh3dg_Z0pCsNjIyvB3tX61k",
  authDomain: "react-cursos-f5966.firebaseapp.com",
  projectId: "react-cursos-f5966",
  storageBucket: "react-cursos-f5966.appspot.com",
  messagingSenderId: "900542485223",
  appId: "1:900542485223:web:4b85a3e2551fc296a34842"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FireBaseDB = getFirestore( FirebaseApp );