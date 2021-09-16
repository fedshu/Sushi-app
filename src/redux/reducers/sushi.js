import { SET_SUSHI } from "../actions";

const initialState = {
  sushiList: [],
  isLoaded: false
};

export const sushi = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUSHI: {
      return {
        ...state,
        sushiList: action.payload,
        isLoaded: true
      };
    }
    default:
      return state;
  }
};