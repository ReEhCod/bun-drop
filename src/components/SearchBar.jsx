import React from "react";

function SearchBar({ filterProducts }) {
  return (
    <div>
      <input
        placeholder="Sök..."
        onInput={(e) => {
          filterProducts(e.target.value);
        }}
        className="product-searchBar"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
