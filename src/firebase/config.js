// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOT4TKHUiX0SPYh7XdMU9W_pQmV6qku_A",
  authDomain: "react-cursos-707f4.firebaseapp.com",
  projectId: "react-cursos-707f4",
  storageBucket: "react-cursos-707f4.appspot.com",
  messagingSenderId: "491901456543",
  appId: "1:491901456543:web:ef4e4d8b086586fa2252aa"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore ( FirebaseApp );
