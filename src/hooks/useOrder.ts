import { useState } from "react";
import type { Menuitem, OrderItem } from "../types/types";
export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip,setTip] = useState(0);
  const addItem = (item: Menuitem) => {
    const itemExits = order.find((orderItem) => orderItem.id === item.id);

    if (itemExits) {
      const updatedItem = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedItem);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: Menuitem["id"]) => {
    const newItems = order.filter((item) => id !== item.id);

    setOrder(newItems);
  };

  const placeOrder = () =>{
    setOrder([]);
    setTip(0);
  }

  return {
    placeOrder,
    tip,
    setTip,
    order,
    addItem,
    removeItem,
  };
}
