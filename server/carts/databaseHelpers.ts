import { collection, getDocs, getDoc, doc, Firestore } from "firebase/firestore/lite";

export async function getCarts(db: Firestore) {
  const cartsCol = collection(db, "carts");
  const cartsSnapshot = await getDocs(cartsCol);
  const cartsList = cartsSnapshot.docs.map((doc) => doc.data());
  return cartsList;
}
