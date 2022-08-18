import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA2tgv_bmggLLt-W8bUB66CnSKQ-dVViTc",
  authDomain: "xchange-b4af0.firebaseapp.com",
  projectId: "xchange-b4af0",
  storageBucket: "xchange-b4af0.appspot.com",
  messagingSenderId: "634049792268",
  appId: "1:634049792268:web:5d910c83db6709574b2129",
  measurementId: "G-3M90ZM3Q3R"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
