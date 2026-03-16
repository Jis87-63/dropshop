import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3uAHrQyJCSyIQzP8X3Uq7ukJ2lWy0tg8",
  authDomain: "bot-ia-20e75.firebaseapp.com",
  databaseURL: "https://bot-ia-20e75-default-rtdb.firebaseio.com",
  projectId: "bot-ia-20e75",
  storageBucket: "bot-ia-20e75.appspot.com",
  messagingSenderId: "601684351023",
  appId: "1:601684351023:web:3123481e2ca6fc6eb80eda",
  measurementId: "G-BP7JPG4ZM0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  db,
  ref,
  set,
  get,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
};
