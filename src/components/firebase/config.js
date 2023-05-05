
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBf0TLY1hBAuqG-9k4aFOudnnAkO3EQl2Q",
  authDomain: "mc---st.firebaseapp.com",
  projectId: "mc---st",
  storageBucket: "mc---st.appspot.com",
  messagingSenderId: "110097854803",
  appId: "1:110097854803:web:de6bce80183123712af1a6",
  measurementId: "G-JFPCWF86EB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirebase = () => (app)