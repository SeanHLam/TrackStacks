import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtxSZ01elU9mCqgeJ0UGhHEcidwIcqIg4",
    authDomain: "trackstacks-1f5d4.firebaseapp.com",
    projectId: "trackstacks-1f5d4",
    storageBucket: "trackstacks-1f5d4.appspot.com",
    messagingSenderId: "820055884253",
    appId: "1:820055884253:web:d2847a46950633f44bf634"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);