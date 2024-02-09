import { Link } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { Card, Image, Text, Badge, Button, Group, Rating } from "@mantine/core";

interface IProductComponent {
  productInfo: IProduct;
}

const Product = ({ productInfo }: IProductComponent) => {
  const addToCart = () => {
    console.log("dodavanje");
    const quantity = 3;
    const prod = {
      id: productInfo.id,
      title: productInfo.title,
      price: productInfo.price,
      quantity,
      total: quantity * productInfo.price,
      discountPercentage: productInfo.discountPercentage,
      discountedPrice: 55,
      thumbnail: productInfo.thumbnail,
    };

    fetch("http://localhost:5000/carts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    });
  };

  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image src={productInfo.thumbnail} height={160} alt='Norway' />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>{productInfo.title}</Text>
        <Rating value={productInfo.rating} fractions={2} readOnly />
      </Group>

      <Text size='sm' c='dimmed'>
        {productInfo.description}
      </Text>

      <Group justify='space-between' mt='md' mb='xs'>
        <Link to={`/product-details/${productInfo.id}`}>
          <Button color='blue' mt='md' radius='md'>
            Check details
          </Button>
        </Link>

        <Button color='green' mt='md' radius='md' onClick={() => addToCart()}>
          Add to cart
        </Button>
      </Group>
    </Card>
  );
};

export default Product;
