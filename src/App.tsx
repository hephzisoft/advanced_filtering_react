import React, { useState } from "react";
import Navigation from "./Navigation/Nav.tsx";
import Products from "./Products/Products.tsx";
import Recommended from "./Recommended/Recommended.tsx";
import Sidebar from "./Siidebar/Sidebar.tsx";

// database

import products from "./db/data.ts";
import Product from "./db/data_type.ts";
import Card from "./components/Card.tsx";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("null");

  const handleInputChange = (e: React.ChangeEvent) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((prod) =>
    prod.title.toLowerCase().includes(query.toLowerCase())
  );
  // input filter

  const handleChange = (e: React.ChangeEvent) => {
    setSelectedCategory(e.target.value);
  };

  // button filter

  const handleClick = (e: React.ChangeEvent) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products: Product[], selected, query) => {
    let filteredProducts = products;
    // filtering input items

    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({
        img,
        reviews,
        prevPrice,
        newPrice,

        title,
      }) => (
        <Card
          key={Math.random()}
          prevPrice={prevPrice}
          img={img}
          title={title}
          newPrice={newPrice}
          reviews={reviews}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);
  return (
    <div className="flex font-parkinsans">
      <div className="side-nav">
        <Sidebar handleChange={handleChange} />
      </div>

      <div className="main ml-[15%]">
        <Navigation />
        <Recommended />
        <Products />
      </div>
    </div>
  );
};

export default App;
