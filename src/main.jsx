import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./stylesheet.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRgk6LG0iwFGzqCplqBOE61D48L_rwFZ8",
  authDomain: "proyectofinalrjs-cecconiandres.firebaseapp.com",
  projectId: "proyectofinalrjs-cecconiandres",
  storageBucket: "proyectofinalrjs-cecconiandres.appspot.com",
  messagingSenderId: "1044455495127",
  appId: "1:1044455495127:web:588db4289c3e01c6eae792"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
