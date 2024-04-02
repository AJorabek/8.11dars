import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBqWIKUsMcagpOuODsBilooQ6DpHhKzNA",
  authDomain: "fn12-b48db.firebaseapp.com",
  projectId: "fn12-b48db",
  storageBucket: "fn12-b48db.appspot.com",
  messagingSenderId: "29671894181",
  appId: "1:29671894181:web:f472342a1c8a16064ab14c",
  databaseURL:
    "https://fn12-b48db-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const realDB = getDatabase(app);

export const auth = getAuth(app);
export const googleProvide = new GoogleAuthProvider();

// export const db = getFirestore(app);
