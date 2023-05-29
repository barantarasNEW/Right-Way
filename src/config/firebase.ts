import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn-uSjoBt9Xb3MsYRb_nY2o0PuEXqSRcc",
  authDomain: "travel-auth-7b217.firebaseapp.com",
  projectId: "travel-auth-7b217",
  storageBucket: "travel-auth-7b217.appspot.com",
  messagingSenderId: "304864174974",
  appId: "1:304864174974:web:d2d7b0bbc5a99349bc492f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);