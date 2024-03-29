import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";
import Product from "../components/Product";

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
        return (
          <Grid.Col span={4} key={prod.id}>
            <Product productInfo={prod} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default HomePage;
