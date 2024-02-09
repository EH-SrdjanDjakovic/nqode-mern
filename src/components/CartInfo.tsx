import { useEffect, useState } from "react";
import { Badge, Group, Menu, Table } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { ICart } from "../models/ICart";

const CartInfo = () => {
  const [cart, setCart] = useState<ICart | null>(null);

  async function getCart(): Promise<void> {
    const response = await fetch("http://localhost:5000/carts");
    const cartsFromServer = await response.json();
    setCart(cartsFromServer.carts);
  }
  useEffect(() => {
    getCart();
  }, []);

  return (
    <Menu shadow='md' width={200}>
      <Menu.Target>
        <Group>
          <div className='badge-container' style={{ position: "relative" }}>
            <IconShoppingCart size={24} color='white' />
            <Badge size='xs' circle className='badge' style={{ position: "absolute", top: "-5px", right: "-5px" }}>
              {cart?.products.length}
            </Badge>
          </div>
        </Group>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default CartInfo;
