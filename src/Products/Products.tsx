import React from "react";

import Card from "../components/Card.tsx";

type ProductsProps = {
  img: string;
  newPrice: string;
  prevPrice: string;
  title: string;
  reviews: string;
};
const Products = ({
  img,
  newPrice,
  prevPrice,
  title,
  reviews,
}: ProductsProps) => {
  return (
    <>
      <section className="card-container flex flex-wrap ml-[2rem] mt-[2rem] z-[-2]"></section>
    </>
  );
};

export default Products;
