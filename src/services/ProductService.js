import React, { useEffect, useState } from "react";

export function ProductManager() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [friesPrice, setFriesPrice] = useState(null);

  const handleFriesSelection = (price) => {
    setFriesPrice(price);
  };

  useEffect(() => {
    fetch("http://localhost:7000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  function filterProducts(searchWord) {
    const tempProducts = [...allProducts].filter((p) => {
      if (p.name.toLowerCase().includes(searchWord.toLowerCase())) {
        return true;
      }
    });
    setFilteredProducts(tempProducts);
  }

  const burgers = filteredProducts.filter((p) => p.category === "burgers");
  const desserts = filteredProducts.filter((p) => p.category === "desserts");
  const drinks = filteredProducts.filter((p) => p.category === "drinks");
  const snacks = filteredProducts.filter((p) => p.category === "snacks");

  return {
    allProducts,
    filteredProducts,
    friesPrice,
    handleFriesSelection,
    filterProducts,
    burgers,
    desserts,
    drinks,
    snacks,
  };
}
