import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYvvyusercFNoChm2Jp6boM7yUkFiWAJs",
  authDomain: "practice-project-a973f.firebaseapp.com",
  projectId: "practice-project-a973f",
  storageBucket: "practice-project-a973f.firebasestorage.app",
  messagingSenderId: "440281566440",
  appId: "1:440281566440:web:b0b0a280263b0971be8d5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
