import { GET_SUSHI } from "../actions";

const initialState = {
  sushi: [],
  isLoaded: false
};

export const sushi = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUSHI: {
      return {
        ...state,
        sushi: action.payload,
        isLoaded: true
      };
    }
    default:
      return state;
  }
};