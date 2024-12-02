import React from "react";

import { AiFillStar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import Product from "../db/data_type.ts";

type CardProps = {
  img: string;
  newPrice: string;
  prevPrice: string;
  title: string;
  reviews: string;
};
const Card = ({ img, newPrice, prevPrice, reviews, title }: CardProps) => {
  return (
    <section className="card m-[20px] rounded-md shadow-md shadow-[#535353]/50 p-[20px] border-solid border-2 border-[#ededed]">
      <img src={img} alt={title} className="card-img w-[13rem] mb-[1rem] " />

      <div className="card-details">
        <h3 className="mb-4 card-title ">{title}</h3>
        <section className="flex items-center mb-4 card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />

          <span className="ml-3 text-xl total-reviews">{reviews}</span>
        </section>

        <section className="flex items-center justify-between card-price">
          <div className="price ">
            <span className="font-dancingScript">$</span>
            <del className="mr-2 font-dancingScript">{prevPrice}</del>
            {newPrice}
          </div>

          <div className="bag">
            <FaBagShopping className="bag-icon " color="#535353" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
