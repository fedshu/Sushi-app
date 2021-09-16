import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortMenu, SushiItem } from "../components";
import { setCategoryType } from "../redux/actions";

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
  const dispatch = useDispatch();

  const handleSelectCategory = (categoryType) => {
    dispatch(setCategoryType(categoryType));
  };
  
    return {
      sushi: sushi.sushiList,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          sushiTypes={sushiTypes}
          onSelectCategoryType={handleSelectCategory}
        />
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
