import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { ProductManager } from "../services/ProductService";
import AllBurgers from "../components/AllBurgers";
import AllDrinks from "../components/AllDrinks";
import AllDesserts from "../components/AllDesserts";
import AllSnacks from "../components/AllSnacks";

function Meny() {
  const {
    allProducts,
    filteredProducts,
    filterProducts,
    handleFriesSelection,
    friesPrice,
    burgers,
    desserts,
    drinks,
    snacks,
  } = ProductManager();

  return (
    <div>
      <SearchBar filterProducts={filterProducts} />
      <AllBurgers burgers={burgers} />

      <AllDesserts desserts={desserts} />

      <AllDrinks drinks={drinks} />

      <AllSnacks
        snacks={snacks}
        friesPrice={friesPrice}
        handleFriesSelection={handleFriesSelection}
      />
      <Link to="/beställning">
        <button className="btn-beställning">Gå till beställning</button>
      </Link>
    </div>
  );
}

export default Meny;
