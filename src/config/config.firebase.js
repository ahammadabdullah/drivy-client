// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD_y9oetzY8oxgOk65UNwIYK1fGyis709o",
  authDomain: "drivy-auth.firebaseapp.com",
  projectId: "drivy-auth",
  storageBucket: "drivy-auth.appspot.com",
  messagingSenderId: "92228253035",
  appId: "1:92228253035:web:96d3a064fcd8c9d9f5882e",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
