import { api } from "../api";

export const SET_SORT_TYPE = "SET_SORT_TYPE";
export const SET_CATEGORY_TYPE = "SET_CATEGORY_TYPE";
export const SET_SUSHI = "SET_SUSHI";
export const SET_LOADING = "SET_LOADING";
export const ADD_SUSHI = "ADD_SUSHI";
export const setLoading = () => ({ type: SET_LOADING });

export const setCategoryType = (type) => ({
  type: SET_CATEGORY_TYPE,
  payload: type,
});

export const setSortType = (type) => ({
  type: SET_SORT_TYPE,
  payload: type,
});

export const addSushi = (sushi) => ({
  type: ADD_SUSHI,
  payload: sushi,
})

export const setSushi = (sushi) => ({
  type: SET_SUSHI,
  payload: sushi,
});

export const getSushi = (categoryType, sortType) => (dispatch) => {
  api.get(`/sushi/${categoryType}`).then(({ sushi }) => {
    const sort = sortType === "popular" ? "rating" : "price";
    const sortedSushi = sushi.sort((a, b) => b[sort] - a[sort]);
    dispatch(setSushi(sortedSushi));
  });
};
