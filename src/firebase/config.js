import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAC5ZhMlUezdCEheYJ_f6yokJxci73xnzI",
  authDomain: "educaweb-6582d.firebaseapp.com",
  projectId: "educaweb-6582d",
  storageBucket: "educaweb-6582d.appspot.com",
  messagingSenderId: "123703697125",
  appId: "1:123703697125:web:9090a69bdc97f2f0177e0c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, auth, db, storage };