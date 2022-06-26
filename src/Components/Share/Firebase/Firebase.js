// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlv26SRjfs94v3MVDiqLI9KOTzC-bUPjw",
  authDomain: "aws-ac1fd.firebaseapp.com",
  projectId: "aws-ac1fd",
  storageBucket: "aws-ac1fd.appspot.com",
  messagingSenderId: "917424187429",
  appId: "1:917424187429:web:42042312fb86f70eadb7cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
