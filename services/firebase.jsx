// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAUxJxmzvZcxZWKe3CvL524r22PWzoe5mI",
  authDomain: "crud-simples-f9edd.firebaseapp.com",
  projectId: "crud-simples-f9edd",
  storageBucket: "crud-simples-f9edd.appspot.com",
  messagingSenderId: "632380505049",
  appId: "1:632380505049:web:0329de5e925a2282adb7c8",
  measurementId: "G-9WN7V3PWEF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)