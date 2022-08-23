import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBOFdsYF5xhXFS3qz9QgZqOn2kkcpKmxXo",
    authDomain: "staybook-hotels.firebaseapp.com",
    projectId: "staybook-hotels",
    storageBucket: "staybook-hotels.appspot.com",
    messagingSenderId: "997774645640",
    appId: "1:997774645640:web:554c7526abf9c73482023d",
    measurementId: "G-NJDC1L3W4P"
  };

const app = initializeApp(firebaseConfig)


const storage  = getFirestore(app);
export {storage};
