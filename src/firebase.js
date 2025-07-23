import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3WEzdBpvcq6Wc90wRfsb5-vgeskbbhTA",
  authDomain: "clinkd-c980f.firebaseapp.com",
  projectId: "clinkd-c980f",
  storageBucket: "clinkd-c980f.firebasestorage.app",
  messagingSenderId: "711525125376",
  appId: "1:711525125376:web:eec46e1bea9085e2d4f7e5",
  measurementId: "G-3WKZFG78KV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 