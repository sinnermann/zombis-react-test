// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-yfGRdrY6M2IyfpoMvEs_xqpTobAzNE",
  authDomain: "zombiz-pedro-attempt.firebaseapp.com",
  projectId: "zombiz-pedro-attempt",
  storageBucket: "zombiz-pedro-attempt.appspot.com",
  messagingSenderId: "896038704002",
  appId: "1:896038704002:web:4754bf2abe9636656fb59b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
