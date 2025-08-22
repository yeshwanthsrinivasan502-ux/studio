// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "verdant-reads",
  "appId": "1:1075369310667:web:a5cf86d2c9eb04d8329e4e",
  "storageBucket": "verdant-reads.firebasestorage.app",
  "apiKey": "AIzaSyB5gV6ya41mjQhH7fRafHXX9zAs06Ju7zA",
  "authDomain": "verdant-reads.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "1075369310667"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
