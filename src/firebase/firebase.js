// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtsfnf1NTd5NHSIfNeafHndh7bZqGSjx0",
  authDomain: "svtech-fire.firebaseapp.com",
  projectId: "svtech-fire",
  storageBucket: "svtech-fire.appspot.com", 
  messagingSenderId: "762580566202",
  appId: "1:762580566202:web:7e34a8cd4bce95423cc283",
  measurementId: "G-PMV9TK6E1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export default app;
