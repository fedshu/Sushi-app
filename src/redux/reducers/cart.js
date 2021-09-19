import { ADD_SUSHI } from "../actions";

const initialState = {
  items: {},
  selectedSushi: [],
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

      const updatedSushiAsArray = Object.values(updatedSushi);
      const sushiPrice = state.totalPrice + action.payload.price * (action.payload.size + 1);

      return {
        ...state,
        items: updatedSushi,
        selectedSushi: getSushiSizeAndPrice(updatedSushiAsArray),
        totalPrice: sushiPrice,
        totalCount: updatedSushiAsArray.flat().length,
      };
    default:
      return state;
  }
};

const getSushiSizeAndPrice = (sushi) => {
  let sizesAndPrices = [];

  //Getting sushi sizes
  sushi.map((items) => {
    let sizes = getUniqueSushiSizes(items);

    //Getting sushi length and price
    Object.values(sizes).forEach((sushiList) => {
      const price = getSushiSizesTotalAmount(sushiList);

      sizesAndPrices.push({
        ...sushiList[0],
        sizeCount: sushiList.length,
        totalPrice: price,
      });
    });
  });

  return sizesAndPrices;
};

const getUniqueSushiSizes = (sushi) => {
  let sizes = {};
  sushi.map((item) => {
    sizes[item.size] = sizes[item.size] ? [...sizes[item.size], item] : [item];
  });
  return sizes;
};

const getSushiSizesTotalAmount = (sushiList) => {
  let price = 0;
  sushiList.forEach((sushi) => {
    price = price + sushi.price * (sushi.size + 1);
  });
  return price;
};
