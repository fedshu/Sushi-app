import React from "react";
import { Categories, SortMenu, SushiItem } from "../components";

const sushiTypes = [
  "All",
  "Nigiri",
  "Gunkan",
  "Maki",
  "Grand Maki",
  "Futo Maki",
];

const sortTypes = ["popular", "price", "alphabetically"];

export const Home = ({ sushi }) => {
  console.log("sushi", sushi);
  return (
    <div className="container">
      <div className="content__top">
        <Categories sushiTypes={sushiTypes} />
        <SortMenu sortTypes={sortTypes} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <SushiItem />
      </div>
    </div>
  );
};
