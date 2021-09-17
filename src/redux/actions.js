export const SET_SORT_TYPE = "SET_SORT_TYPE";
export const SET_CATEGORY_TYPE = "SET_CATEGORY_TYPE";
export const SET_SUSHI = "SET_SUSHI";

export const setSortType = (type) => ({
  type: SET_SORT_TYPE,
  payload: type,
});

export const setCategoryType = (type) => ({
  type: SET_CATEGORY_TYPE,
  payload: type,
});

export const setSushi = (sushi) => ({
  type: SET_SUSHI,
  payload: sushi,
});

export const getSushi = () => (dispatch) => {
  api.get("/sushi").then((result) => dispatch(setSushi(result.sushi)));
};