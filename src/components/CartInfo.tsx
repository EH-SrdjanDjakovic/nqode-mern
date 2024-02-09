import { useEffect, useState } from "react";
import { Menu } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

const CartInfo = () => {
  const [carts, setCarts] = useState<Array<any>>([]);

  async function getCarts(): Promise<void> {
    const response = await fetch("http://localhost:5000/carts");
    const cartsFromServer = await response.json();
    setCarts(cartsFromServer.carts);
  }
  useEffect(() => {
    getCarts();
  }, []);

  console.log("carts", carts);

  return (
    <Menu shadow='md' width={200}>
      <Menu.Target>
        <IconShoppingCart size={24} color='white' />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CartInfo;
