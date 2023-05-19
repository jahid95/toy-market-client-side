// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFOJ2AYpR42-AieakQJD-EVnVxaCJkoZA",
  authDomain: "kids-cars-assingment.firebaseapp.com",
  projectId: "kids-cars-assingment",
  storageBucket: "kids-cars-assingment.appspot.com",
  messagingSenderId: "606517703457",
  appId: "1:606517703457:web:3eebe2604f4c07cfb3c460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;