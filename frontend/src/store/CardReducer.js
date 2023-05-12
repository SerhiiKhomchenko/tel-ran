import { act } from "react-dom/test-utils";

const ADD_TO_CARD = "ADD_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

let defoultState = {
  products: [],
};
 
export const CardReducer = (state = defoultState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
            let isProduct = state.products.find(elem => elem.id === action.payload.id)
            if(isProduct) {
                return {...state, products: state.products.map(elem => {
                    if(elem.id === isProduct.id) {
                        elem.count += 1
                    }
                    return elem
                })}
            } else {
                return {...state, products: [...state.products, action.payload]}
            }
    case REMOVE_FROM_CARD:
      return {
        ...state,
        products: state.products.filter((elem) => elem.id !== action.payload),
      };
    case INCREMENT:
      return {
        ...state,
        products: state.products.map((elem) => {
          if (elem.id == action.payload) {
            elem.count += 1;
          }
          return elem;
        }),
      };
    case DECREMENT:
      let product = state.products.find((elem) => elem.id === action.payload);
      if (product.count === 1) {
        return {
          ...state,
          products: state.products.filter((elem) => elem.id != action.payload),
        };
      } else {
        return {
          ...state,
          products: state.products.map((elem) => {
            if (elem.id == action.payload) {
              elem.count -= 1;
            }
            return elem
          }),
        };
      }
    default:
      return state;
  }
};

export const addToCardAction = (payload) => ({ type: ADD_TO_CARD, payload });
export const removeFromCardAction = (payload) => ({type: REMOVE_FROM_CARD,payload,});
export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({type: DECREMENT, payload})