import { collection, getDocs, getDoc, doc, Firestore } from 'firebase/firestore/lite';

export async function getProducts(db: Firestore) {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  const productsList = productSnapshot.docs.map(doc => doc.data());
  return productsList;
}

export async function getSingleProduct(db: Firestore, productId: string) {
  const productRef = doc(db, 'products', productId);
  
  try {
    const docSnapshot = await getDoc(productRef);
    
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return null
    }
  } catch (error) {
    return error
  }
}