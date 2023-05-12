import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import {
  decrementAction,
  incrementAction,
  removeFromCardAction,
} from "../../../store/CardReducer";
import { Link } from "react-router-dom";

function Card() {
  const productsCard = useSelector((store) => store.card.products);
  const dispatch = useDispatch();
  let priceArray = [];

  productsCard.map((elem) => {
    if (elem.count === 1) {
      elem.discont_price
        ? priceArray.push(elem.discont_price)
        : priceArray.push(elem.price);
    } else {
      elem.discont_price
        ? priceArray.push(elem.discont_price * elem.count)
        : priceArray.push(elem.price * elem.count);
    }
  });

  let sum = priceArray.reduce((total, amount) => total + amount, 0);

  return (
    <div className="card">
      <div className="card_block">
        <div className="card_header">
          <h2>Shopping Cart</h2>
            <Link to="/Allproducts" className="link_item">
              Back to store
            </Link>
        </div>
        {productsCard.map((elem) => (
          <div key={elem.id} className="card_product">
            <img src={`http://localhost:3333${elem.image}`} alt="product_img" />
            <div>
              <h4>{elem.title}</h4>
              <div className="counter">
                <button onClick={() => dispatch(incrementAction(elem.id))}>
                  +
                </button>
                <p>{elem.count}</p>
                <button onClick={() => dispatch(decrementAction(elem.id))}>
                  -
                </button>
              </div>
            </div>
            {elem.discont_price ? (
              <div className="price_block">
                <p className="card_item_discont_price">{`${elem.discont_price}$`}</p>
                <p className="card_item_full_price">{`${elem.price}$`}</p>
              </div>
            ) : (
              <div className="price_block">
                <p className="card_item_discont_price">{`${elem.price}$`}</p>
              </div>
            )}
            <button onClick={() => dispatch(removeFromCardAction(elem.id))} className="remove_button">
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="detail_block">
        <h2>Order details</h2>
        <div className="total_price">
          <h4>Total</h4>
          <p>{sum}</p>
        </div>
        <input placeholder="Phone number"/>
        <button>Order</button>
      </div>
    </div>
  );
}

export default Card;
