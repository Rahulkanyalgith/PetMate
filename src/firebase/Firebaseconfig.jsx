// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdwhT_f9SHJpGHhLH1vHMb7O9T6oVlt2E",
  authDomain: "petmate-2b5b4.firebaseapp.com",
  projectId: "petmate-2b5b4",
  storageBucket: "petmate-2b5b4.appspot.com",
  messagingSenderId: "57104760234",
  appId: "1:57104760234:web:cb757506525e08a6597fd3",
  measurementId: "G-1LNS3SFP25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }