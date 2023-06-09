import React from "react";
import DessertCard from "./DessertCard";

function AllDesserts({ desserts }) {
  return (
    <div>
      <h1>Våra Desserter</h1>
      <div className="items-container">
        {desserts.map((p) => (
          <DessertCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}

export default AllDesserts;
