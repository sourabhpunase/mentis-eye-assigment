// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN4OIJs0VEFwBc7UebxISVgGmogcq0_c0",
  authDomain: "buybusy1-d09ed.firebaseapp.com",
  projectId: "buybusy1-d09ed",
  storageBucket: "buybusy1-d09ed.appspot.com",
  messagingSenderId: "439355193513",
  appId: "1:439355193513:web:c8f56cd4141b074d4f91b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

