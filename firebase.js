import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVGKEf5RlBZoe8ddVFob5z_Zkqfcq8REk",
  authDomain: "twitter-clone-d52b0.firebaseapp.com",
  projectId: "twitter-clone-d52b0",
  storageBucket: "twitter-clone-d52b0.appspot.com",
  messagingSenderId: "1095679322318",
  appId: "1:1095679322318:web:b7ead085e6ae26acdc889f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
