
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyB55rE33uaG9TqBpwRscIp8qRn9MG-7zbc",
  authDomain: "supercode-a548d.firebaseapp.com",
  projectId: "supercode-a548d",
  storageBucket: "supercode-a548d.appspot.com",
  messagingSenderId: "686642805508",
  appId: "1:686642805508:web:fc303a160795e11fc9ae51",
  measurementId: "G-BQWNSBMYPN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
