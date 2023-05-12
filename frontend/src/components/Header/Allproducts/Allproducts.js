import "./Allproducts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../../store/action/loadProducts";
import Filter from "../SortFilter/Filter";
import Sort from "../SortFilter/Sort";

function Allproducts() {
  let products = useSelector((store) => store.products.data);
  const dispatch = useDispatch();

   function discont(full_price, discont_price) {
    let discont = full_price - discont_price;
    return Math.floor((discont * 100) / full_price);
  }
  useEffect(() => {
    dispatch(loadProducts());
  }, []);



  return (
    <div className="products_wrapper">
      <h2>All products</h2>
      <div className="wrapper">
        <Filter/>
        <Sort/>
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link className="product_item" to={`/products/${product.id}`}>
              <img
                src={`http://localhost:3333/${product.image}`}
                alt="product_img"
              />
              {product.discont_price ? (
                <div>
                  <p className="discont_price">{`${product.discont_price}$`}</p>
                  <p className="full_price">{`${product.price}$`}</p>
                  <p className="discont">
                    {discont(product.price, product.discont_price)}%
                  </p>
                </div>
              ) : (
                <p className="full_price">{`${product.price}$`}</p>
              )}
              <h4>{product.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allproducts;
