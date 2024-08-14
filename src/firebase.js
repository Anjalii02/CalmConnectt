import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsLDcRcKHJXKhY6YTxZjPKJPSPGVy-gKI",
    authDomain: "calmconnect.firebaseapp.com",
    projectId: "calmconnect",
    storageBucket: "calmconnect.appspot.com",
    messagingSenderId: "470163880623",
    appId: "1:470163880623:web:28fda03367e60c3fbd725a",
    measurementId: "G-P6EGP0GE7M"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
