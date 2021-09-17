import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  SortMenu,
  SushiItem,
  SushiBackgroundLoading,
} from "../components";
import { setCategoryType, getSushi } from "../redux/actions";

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

  useEffect(() => {
    dispatch(getSushi());
  }, []);

  const handleSelectCategory = (categoryType) => {
    dispatch(setCategoryType(categoryType));
  };

  const { sushi, isLoaded } = useSelector(({ sushi }) => {
    return {
      sushi: sushi.sushiList,
      isLoaded: sushi.isLoaded,
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
        {isLoaded
          ? sushi.map((item) => <SushiItem key={item.id} {...item} />)
          : Array(8).fill(0).map((item, index) => <SushiBackgroundLoading key={index + 1}/>)}
      </div>
    </div>
  );
};
