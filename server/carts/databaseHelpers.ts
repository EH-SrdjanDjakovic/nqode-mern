import { collection, getDocs, getDoc, Firestore } from "firebase/firestore/lite";

export async function getCarts(db: Firestore) {
  const cartsCol = collection(db, "carts");
  const cartsSnapshot = await getDocs(cartsCol);
  const cartsList = cartsSnapshot.docs[0].data();

  // Extract the products field value
  const products = cartsList.products;

  // Fetch the corresponding product documents
  const productPromises = products.map((productRef: any) => getDoc(productRef));
  const productSnapshots = await Promise.all(productPromises);

  // Access the actual product structures
  const productData = productSnapshots.map((productSnapshot) => productSnapshot.data());
  cartsList.products = productData;

  return cartsList;
}
