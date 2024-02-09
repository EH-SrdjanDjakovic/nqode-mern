import { collection, getDocs, getDoc, doc, Firestore, updateDoc } from "firebase/firestore/lite";

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

export async function updateCart(db: Firestore, newProduct: Array<any>) {
  const docRef = doc(db, "carts", "hTja5esiLja3WLthV8HR");
  const docSnapshot = await getDoc(docRef);
  const currentCartData = docSnapshot.data();
  const newSetOfProducts = currentCartData?.products;
  newSetOfProducts.push(newProduct);

  const newData = { products: newSetOfProducts };
  updateDoc(docRef, newData)
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}
