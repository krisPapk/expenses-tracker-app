import { initializeApp, } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxY6lXajmK3kO25uRQva01Bs3bLLeIMZg",
    authDomain: "pwa-final-project-41667.firebaseapp.com",
    databaseURL: "https://pwa-final-project-41667-default-rtdb.firebaseio.com",
    projectId: "pwa-final-project-41667",
    storageBucket: "pwa-final-project-41667.appspot.com",
    messagingSenderId: "480925286792",
    appId: "1:480925286792:web:46f99df3867d8df14bba3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


