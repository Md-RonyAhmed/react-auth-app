// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_API_KEY,
    authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_StorageBucket,
    messagingSenderId: import.meta.env.VITE_REACT_messagingSenderId,
    appId: import.meta.env.VITE_REACT_appId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
