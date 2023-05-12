import "./Product.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCardAction } from "../../../store/CardReducer";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let url = `http://localhost:3333/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(...data));
  }, []);

  function discont(full_price, discont_price) {
    let discont = full_price - discont_price;
    return Math.floor((discont * 100) / full_price);
  }

  return (
    <div className="product_wrapper">
      <div className="product_part1" >
      <h2>{product.title}</h2>
        <img src={`http://localhost:3333${product.image}`} alt="product_img" />
        </div>
        <div className="product_part2">
          {product.discont_price ? (
            <div className="price_box">
              <p className="product_discont_price">{`${product.discont_price}$`}</p>
              <p className="product_full_price">{`${product.price}$`}</p>
              <p className="product_discont">
                {discont(product.price, product.discont_price)}%
              </p>
            </div>
          ) : (
            <p className="product_discont_price">{`${product.price}$`}</p>
          )}
          <button className="card_button"
            onClick={() => {
              dispatch(addToCardAction({ ...product, count: 1 }));
            }}
          >
            To cart
          </button>
          <div className="description">
            <h4>Description</h4>
            <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
