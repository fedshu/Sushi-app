import { ADD_SUSHI } from "../actions";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUSHI:
      const stateItems = state.items[action.payload.id];
      const updatedSushi = {
        ...state.items,
        [action.payload.id]: stateItems
          ? [...stateItems, action.payload]
          : [action.payload],
      };
      const sushiLength = Object.values(updatedSushi).flat();
      // const sushiPrice = sushiLength.reduce((sum, obj) => obj.price + sum, 0);
      const sushiPrice = state.totalPrice + action.payload.price;

      return {
        ...state,
        items: updatedSushi,
        totalPrice: sushiPrice,
        totalCount: sushiLength.length,
      };
    default:
      return state;
  }
};
