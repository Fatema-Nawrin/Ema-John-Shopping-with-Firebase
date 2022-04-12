// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUDih35mNjXK2k4U4-bhWvqP4_kmKYAZo",
    authDomain: "ema-john-simple-60ed7.firebaseapp.com",
    projectId: "ema-john-simple-60ed7",
    storageBucket: "ema-john-simple-60ed7.appspot.com",
    messagingSenderId: "1013451916880",
    appId: "1:1013451916880:web:740c7d6d5307615e6d3355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;