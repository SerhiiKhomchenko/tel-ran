import { addProductsAction } from "../ProductsReducer";

export const loadProducts = () => {
  return function (dispatch) {
    let url = "http://localhost:3333/products/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProductsAction(data));
      });
  };
};
