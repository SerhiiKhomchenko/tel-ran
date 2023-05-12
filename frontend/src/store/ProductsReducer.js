const ADD_PRODUCTS = "ADD_PRODUCTS";
const FILTER_FROM = "FILTER_FROM";
const FILTER_TO = "FILTER_TO";
const DISCOUNTED_ITEMS = "DISCOUNTED_ITEMS";
const SORT_ITEMS = "SORT_ITEMS";

let defoultState = {
  all: [],
  data: [],
};

export const ProductsReducer = (state = defoultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, all: action.payload, data: action.payload };
    case FILTER_FROM:
      return {
        ...state,
        data: state.all.filter((product) =>
          product.discont_price
            ? product.discont_price >= action.payload
            : product.price >= action.payload
        ),
      };
    case FILTER_TO:
      return {
        ...state,
        data:
          action.payload === ""
            ? state.all
            : state.all.filter((product) =>
                product.discont_price
                  ? product.discont_price <= action.payload
                  : product.price <= action.payload
              ),
      };
    case DISCOUNTED_ITEMS:
      return {
        ...state,
        data: action.payload
          ? state.all.filter((product) => product.discont_price)
          : state.all,
      };
    case SORT_ITEMS:
      if (action.payload === "High to low")
        return {
          ...state,
          data: state.all.slice().sort((a, b) => ((b.discont_price || b.price) > (a.discont_price || a.price)) ? 1 : -1),
        };
      else if (action.payload === "Low to high")
        return {
          ...state,
          data: state.all.slice().sort((a, b) => ((a.discont_price || a.price) > (b.discont_price || b.price)) ? 1 : -1),
        };
      else {
        return {...state,
                data: state.all
        };
      }
    default:
      return state;
  }
};

export const addProductsAction = (payload) => ({ type: ADD_PRODUCTS, payload });
export const filterFromAction = (payload) => ({ type: FILTER_FROM, payload });
export const filterToAction = (payload) => ({ type: FILTER_TO, payload });
export const discountedItemsAction = (payload) => ({ type: DISCOUNTED_ITEMS, payload,});
export const sortItemAction = (payload) => ({ type: SORT_ITEMS, payload });
