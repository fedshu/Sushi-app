import {
  ADD_SUSHI,
  CLEAR_CART,
  ADD_ONE_SUSHI,
  REMOVE_ONE_SUSHI,
  REMOVE_SUSHI_BUNDLE,
} from "../actions";

const initialState = {
  items: {},
  sushiDividedBySize: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUSHI: {
      const stateItems = state.items[action.payload.id];
      const updatedSushi = {
        ...state.items,
        [action.payload.id]: stateItems
          ? [...stateItems, action.payload]
          : [action.payload],
      };

      const updatedSushiAsArray = Object.values(updatedSushi);
      const sushiPrice =
        state.totalPrice + action.payload.price * (action.payload.size + 1);

      return {
        ...state,
        items: updatedSushi,
        sushiDividedBySize: getSushiSizeAndPrice(updatedSushiAsArray),
        totalPrice: sushiPrice,
        totalCount: getSushiCount(updatedSushi),
      };
    }
    case CLEAR_CART: {
      return initialState;
    }
    case ADD_ONE_SUSHI: {
      const { id, size, type, price } = action.payload;
      const items = {
        ...state.items,
        [id]: [
          ...state.items[id],
          {
            ...state.items[id][0],
            type,
            size,
          },
        ],
      };

      return {
        ...state,
        items,
        sushiDividedBySize: state.sushiDividedBySize.map((sushi) => {
          if (sushi.type === type && sushi.id === id) {
            sushi.totalPrice += sushi.price * (sushi.size + 1);
            sushi.sizeCount += 1;
          }
          return sushi;
        }),
        totalPrice: state.totalPrice + price * (size + 1),
        totalCount: state.totalCount + 1,
      };
    }
    case REMOVE_ONE_SUSHI: {
      const { id, size, type, price } = action.payload;
      let items = {};
      let sushiItemIndex;

      if (state.items[id]) {
        sushiItemIndex = state.items[id].findIndex(
          (sushi) => sushi.type === type && sushi.id === id
        );
      }
      if (state.items[id].length) {
        state.items[id].splice(sushiItemIndex, 1);
        items = {
          ...state.items,
          [id]: [...state.items[id]],
        };
      } else {
      }

      const sushiDividedBySize = [];
      state.sushiDividedBySize.forEach((sushi) => {
        if (sushi.type === type && sushi.id === id) {
          if (sushi.sizeCount !== 1) {
            sushi.totalPrice -= sushi.price * (sushi.size + 1);
            sushi.sizeCount -= 1;
            sushiDividedBySize.push(sushi);
          }
        } else {
          sushiDividedBySize.push(sushi);
        }
      });

      return {
        ...state,
        items,
        sushiDividedBySize,
        totalPrice: state.totalPrice - price * (size + 1),
        totalCount: state.totalCount - 1,
      };
    }
    case REMOVE_SUSHI_BUNDLE: {
      const { id, type } = action.payload;
      let totalPrice = 0;
      const items = {
        ...state.items,
        [id]: state.items[id].filter((sushi) => {
          if (sushi.type !== type) {
            return sushi;
          }
        }),
      };

      Object.values(items)
        .flat()
        .forEach((sushi) => {
          totalPrice += sushi.price * (sushi.size + 1);
        });

      return {
        ...state,
        items,
        totalCount: getSushiCount(items),
        totalPrice,
        sushiDividedBySize: [
          ...state.sushiDividedBySize.filter(
            (sushi) => sushi.type !== type || sushi.id !== id
          ),
        ],
      };
    }
    default:
      return state;
  }
};

const getSushiCount = (sushi) => {
  return Object.values(sushi).flat().length;
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
    price += sushi.price * (sushi.size + 1);
  });
  return price;
};
