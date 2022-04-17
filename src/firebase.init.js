// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkAPhiN5egnevKNpOePGGn6fswplqGB0Q",
    authDomain: "rabiul-mixer-world.firebaseapp.com",
    projectId: "rabiul-mixer-world",
    storageBucket: "rabiul-mixer-world.appspot.com",
    messagingSenderId: "447072668385",
    appId: "1:447072668385:web:6af9749141c4869cffc5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;