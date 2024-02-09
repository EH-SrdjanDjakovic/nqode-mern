import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Array<IProduct> | null>(null);

  async function getProducts(): Promise<void> {
    const response = await fetch("http://localhost:5000/products");
    const productsFromServer = await response.json();
    setAllProducts(productsFromServer.products);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid>
      {allProducts?.map((prod) => {
        return <Grid.Col span={4}>{prod.title}</Grid.Col>;
      })}
    </Grid>
  );
};

export default HomePage;
