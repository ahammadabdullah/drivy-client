// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqzTyIhjpGwWQ8XsXEXR7cA2ebMjbJmsc",
  authDomain: "drivy-b8c30.firebaseapp.com",
  projectId: "drivy-b8c30",
  storageBucket: "drivy-b8c30.appspot.com",
  messagingSenderId: "488215756510",
  appId: "1:488215756510:web:7a7f1ccd00848892f3cc4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth;
