// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSYVtYpVMBom0dIp3Gsz6DM754ln-9EzU",
  authDomain: "devalla-clothing-store.firebaseapp.com",
  projectId: "devalla-clothing-store",
  storageBucket: "devalla-clothing-store.appspot.com",
  messagingSenderId: "951776784342",
  appId: "1:951776784342:web:b41bcdb56359f85b4ffe77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const emailSignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const emailSignUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOut = () => auth.signOut();

export default auth;
