import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { addToOrder } from "../services/OrderService";

function SnackCard({
  name,
  price,
  image,
  sizes,
  friesPrice,
  handleFriesSelection,
}) {
  const isPommesFrites = name === "Pommes Frites";
  const [selectedSize, setSelectedSize] = useState(null);
  const { order, setOrder } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const existingProduct = order.find((product) => product.name === name);
    if (existingProduct && existingProduct.quantity >= 20) {
      return;
    }

    addToOrder(
      order,
      setOrder,
      name,
      isPommesFrites ? selectedSize.price : price,
      image,
      quantity,
      isPommesFrites ? selectedSize.name : null
    );

    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    handleFriesSelection(isPommesFrites ? size.price : null);
  };

  return (
    <div className="item-card">
      <img src={image} alt="product image" />
      <h3>{name}</h3>
      {isPommesFrites ? (
        <div>
          <p>
            {selectedSize && (
              <span>
                Price: <em>{friesPrice} kr</em>
              </span>
            )}
          </p>
          {sizes &&
            sizes.map((s) => (
              <button
                key={s.name}
                onClick={() => handleSizeSelection(s)}
                className="btn-fries-sizes"
              >
                {s.name}
              </button>
            ))}
        </div>
      ) : (
        <p>
          Price: <em>{price} kr</em>
        </p>
      )}
      {quantity > 0 && <p>Antal: {quantity}</p>}
      <button onClick={handleAdd}>Lägg till</button>
    </div>
  );
}

export default SnackCard;
