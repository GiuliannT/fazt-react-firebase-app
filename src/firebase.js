// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU34rE3vItLIgn2LkSSIi14MrtJJU_8qM",
  authDomain: "fazt-react-fb-auth.firebaseapp.com",
  projectId: "fazt-react-fb-auth",
  storageBucket: "fazt-react-fb-auth.appspot.com",
  messagingSenderId: "98929928508",
  appId: "1:98929928508:web:8f58ec0dc3e504cb4c1639",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
