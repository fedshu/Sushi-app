import React from "react";
import { useSelector } from "react-redux";
import { Categories, SortMenu, SushiItem } from "../components";

const sushiTypes = [
  "All",
  "Yaki maki",
  "Futomaki",
  "Maki",
  "Grand maki",
  "Nigiri",
];

const sortTypes = ["popular", "price", "alphabetically"];

export const Home = () => {
  const { sushi } = useSelector(({ sushi }) => {
    return {
      sushi: sushi.sushiList,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories sushiTypes={sushiTypes} />
        <SortMenu sortTypes={sortTypes} />
      </div>
      <h2 className="content__title">All sushi</h2>
      <div className="content__items">
        {sushi?.map((item) => (
          <SushiItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
