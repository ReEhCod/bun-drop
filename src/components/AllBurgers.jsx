import React from "react";
import BurgerCard from "./BurgerCard";

function AllBurgers({ burgers }) {
  return (
    <div>
      <h1>Våra Burgare</h1>
      <div className="items-container">
        {burgers.map((b) => (
          <BurgerCard
            key={b.id}
            name={b.name}
            price={b.price}
            image={b.image}
          />
        ))}
      </div>
    </div>
  );
}

export default AllBurgers;
