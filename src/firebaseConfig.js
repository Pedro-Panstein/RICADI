import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvZlVM50nI9s16dOf8r8tqyWH-60q7B0k",
  authDomain: "banco-de-acessos.firebaseapp.com",
  projectId: "banco-de-acessos",
  storageBucket: "banco-de-acessos.firebasestorage.app",
  messagingSenderId: "989004771643",
  appId: "1:989004771643:web:fe1641333f6e2ded77071e",
  measurementId: "G-QXHC57KF82",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
