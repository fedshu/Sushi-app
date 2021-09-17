import { SET_SUSHI, SET_LOADING } from "../actions";

const initialState = {
  sushiList: [],
  isLoaded: false,
};

export const sushi = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUSHI: {
      return {
        ...state,
        sushiList: action.payload,
        isLoaded: true,
      };
    }
    case SET_LOADING: {
      return {
        isLoaded: false,
      };
    }
    default:
      return state;
  }
};
