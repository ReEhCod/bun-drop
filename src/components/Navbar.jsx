import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../logo black.png";
import { OrderContext } from "../contexts/OrderContext";

function Navbar() {
  const { order } = useContext(OrderContext);
  const orderCount = order.reduce(
    (count, product) => count + product.quantity,
    0
  );

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logotyp" className="img-logo" />
        </Link>
      </div>
      <Link to="/meny" className="color-white">
        <h2 className="flex-container">
          <FontAwesomeIcon icon={faBars} />
          Meny
        </h2>
      </Link>

      <Link to="/" className="color-white">
        <h2 className="flex-container">
          <FontAwesomeIcon icon={faHouse} />
          Hem
        </h2>
      </Link>

      <Link to="/beställning" className="cart">
        <div>
          <h2>
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            {orderCount > 0 && (
              <span className="order-count">{orderCount}</span>
            )}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
