import React from "react";
import SnackCard from "./SnackCard";

function AllSnacks({ handleFriesSelection, friesPrice, snacks }) {
  return (
    <div>
      <h1>Goda Snacks</h1>
      <div className="items-container">
        {snacks.map((p) => (
          <div key={p.category}>
            {p.name === "Pommes Frites" && p.sizes ? (
              <div className="snackCards-container">
                <SnackCard
                  key={p.id}
                  name={p.name}
                  sizes={p.sizes}
                  handleFriesSelection={handleFriesSelection}
                  image={p.image}
                  friesPrice={friesPrice}
                />
              </div>
            ) : (
              <SnackCard
                key={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                friesPrice={friesPrice}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllSnacks;
