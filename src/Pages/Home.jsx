import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  getSushi,
  setCategoryType,
  setSortType,
} from "../redux/actions";
import {
  Categories,
  SortMenu,
  SushiItem,
  SushiBackgroundLoading,
} from "../components";

const sushiTypes = [
  { label: "All", apiName: "all" },
  { label: "Yaki maki", apiName: "yaki-maki" },
  { label: "Futomaki", apiName: "futomaki" },
  { label: "Maki", apiName: "maki" },
  { label: "Grand maki", apiName: "grand-maki" },
  { label: "Nigiri", apiName: "nigiri" },
];

const sortTypes = ["popular", "price"];

export const Home = () => {
  const dispatch = useDispatch();
  const { sushiList, isLoaded } = useSelector(({ sushi }) => sushi);
  const { category, sortBy } = useSelector(({ filter }) => filter);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getSushi(category, sortBy));
  }, [category, sortBy]);

  const handleSelectCategory = (categoryType) => {
    if (categoryType === category) return
    dispatch(setCategoryType(categoryType));
  };

  const handleSelectSort = (sortType) => {
    if (sortType === sortBy) return
    dispatch(setSortType(sortType));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          sushiTypes={sushiTypes}
          onSelectCategoryType={handleSelectCategory}
        />
        <SortMenu sortTypes={sortTypes} onSelectSortType={handleSelectSort} />
      </div>
      <h2 className="content__title">All sushi</h2>
      <div className="content__items">
        {isLoaded
          ? sushiList.map((item) => <SushiItem key={item.id} {...item} />)
          : Array(4)
              .fill(0)
              .map((item, index) => <SushiBackgroundLoading key={index + 1} />)}
      </div>
    </div>
  );
};
