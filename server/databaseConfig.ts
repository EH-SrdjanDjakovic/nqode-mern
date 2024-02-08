import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

function configureDatabase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCKyGkK9TOXRVnnuejkq-wQ6dWvm947zHE",
    authDomain: "nqode-products-app.firebaseapp.com",
    projectId: "nqode-products-app",
    storageBucket: "nqode-products-app.appspot.com",
    messagingSenderId: "584017509100",
    appId: "1:584017509100:web:8882d380977a53ac5ac3c9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  return db;
}

export default configureDatabase