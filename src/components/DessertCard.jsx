import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { addToOrder } from "../services/OrderService";

function DessertCard({ name, price, image }) {
  const { order, setOrder } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const existingProduct = order.find((product) => product.name === name);
    if (existingProduct && existingProduct.quantity >= 20) {
      return;
    }

    addToOrder(order, setOrder, name, price, image, quantity);

    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  };

  return (
    <div className="item-card">
      <img src={image} alt="dessert image" />
      <h3>{name}</h3>
      <p>
        Price: <em>{price} kr</em>
      </p>
      {quantity > 0 && <p>Antal: {quantity}</p>}
      <button onClick={handleAdd}>Lägg till</button>
    </div>
  );
}

export default DessertCard;
