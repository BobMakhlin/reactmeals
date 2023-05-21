import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKVkdb4c-IIUIceArX0JxYNnpszZ-29C4",
  authDomain: "react-http-c16bc.firebaseapp.com",
  databaseURL:
    "https://react-http-c16bc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-http-c16bc",
  storageBucket: "react-http-c16bc.appspot.com",
  messagingSenderId: "1074228467009",
  appId: "1:1074228467009:web:77b60de6b6c88a75877dc0",
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
