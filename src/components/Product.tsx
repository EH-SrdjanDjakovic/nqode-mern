import { IProduct } from "../models/IProduct";
import { Card, Image, Text, Badge, Button, Group, Rating } from "@mantine/core";

interface IProductComponent {
  productInfo: IProduct;
}

const Product = ({ productInfo }: IProductComponent) => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image
          src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
          height={160}
          alt='Norway'
        />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>{productInfo.title}</Text>
        <Rating value={productInfo.rating} fractions={2} readOnly />
      </Group>

      <Text size='sm' c='dimmed'>
        {productInfo.description}
      </Text>

      <Group justify='space-between' mt='md' mb='xs'>
        <Button color='blue' mt='md' radius='md'>
          Check details
        </Button>
        <Button color='green' mt='md' radius='md'>
          Add to cart
        </Button>
      </Group>
    </Card>
  );
};

export default Product;
