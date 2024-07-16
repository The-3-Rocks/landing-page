// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlo8-3sUw23oPsNVnmC89DIbBBoJcJDFg",
  authDomain: "the-3-rocks.firebaseapp.com",
  databaseURL: "https://the-3-rocks-default-rtdb.firebaseio.com",
  projectId: "the-3-rocks",
  storageBucket: "the-3-rocks.appspot.com",
  messagingSenderId: "390126958061",
  appId: "1:390126958061:web:a3900466d2ee094076e3e4",
  measurementId: "G-Y90RE5MY0F",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
