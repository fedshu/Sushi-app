import { SET_CATEGORY_TYPE, SET_SORT_TYPE } from "../actions";

const initialState = {
  category: 0,
  sortBy: "popular",
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case SET_CATEGORY_TYPE: {
      return {
        ...state,
        category: action.payload,
      };
    }
    default:
      return state;
  }
};
