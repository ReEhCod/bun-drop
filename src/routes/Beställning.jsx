import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext.jsx";

function Beställning() {
  const { order, setOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleUpdateQuantity = (index, quantity) => {
    const updatedOrder = [...order];
    if (quantity > 20) {
      quantity = 20;
    } else if (quantity < 0) {
      quantity = 0;
    }
    updatedOrder[index].quantity = quantity;
    setOrder(updatedOrder);
  };

  const calculateTotalSum = (order) => {
    const sum = order.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return sum.toFixed(2);
  };

  const handleOrder = () => {
    const totalSum = calculateTotalSum(order);
    navigate("/betalning", { state: { totalSum: totalSum } });
  };

  return (
    <div>
      <h1 className="shopingCart-header">Din beställning</h1>
      {order.map((product, index) => (
        <div key={index} className="shopingCart-item">
          <img src={product.image} alt="product image" />
          <p>{product.name}</p>
          {product.size && <p>Size: {product.size}</p>}
          <div className="handleQuantity-btns">
            <p>
              Totalt pris: {(product.price * product.quantity).toFixed(2)} kr
            </p>
            <button onClick={() => handleUpdateQuantity(index, 0)}>
              Ta bort
            </button>
            <button
              onClick={() => handleUpdateQuantity(index, product.quantity - 1)}
            >
              -
            </button>
            <p>Antal: {product.quantity}</p>
            <button
              onClick={() => handleUpdateQuantity(index, product.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="shopingCart-action">
        <h2>Total summa: {calculateTotalSum(order)} kr</h2>
        {order.length > 0 && <button onClick={handleOrder}>Beställ</button>}
      </div>
    </div>
  );
}

export default Beställning;
