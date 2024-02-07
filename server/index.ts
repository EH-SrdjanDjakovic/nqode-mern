import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

dotenv.config()

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


const app: Express = express()
const port = process.env.PORT || 5000

async function getProducts() {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  const productsList = productSnapshot.docs.map(doc => doc.data());
  return productsList;
}

app.get("/", (req: Request, res: Response) => {
  getProducts().then((products) => {
    res.send({products})
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
