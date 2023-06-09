import React from "react";
import { ProductManager } from "../services/ProductService";
import DrinkCard from "./DrinkCard";

function AllDrinks({ drinks }) {
  return (
    <div>
      <h1>Kalla Drycker</h1>
      <div className="items-container">
        {drinks.map((p) => (
          <DrinkCard key={p.id} name={p.name} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
}

export default AllDrinks;
