import './Filter.css'
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  discountedItemsAction,
  filterFromAction,
} from "../../../store/ProductsReducer";
import { filterToAction } from "../../../store/ProductsReducer";

function Filter() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <div className='filter_block'>
        <h4>Price</h4>
        <input
          type={"text"}
          placeholder='From'
          onChange={(e) => dispatch(filterFromAction(e.target.value))}
        />
        <input
          type={"text"}
          placeholder='To'
          onChange={(e) => dispatch(filterToAction(e.target.value))}
        />
      </div>
      <div className='discounted_items'>
        <h4>Discounted items</h4>
        <input
          type={"checkbox"}
          onChange={() => {
            dispatch(discountedItemsAction(!checked));
            setChecked(!checked) 
          }}
        />
      </div>
    </div>
  );
}

export default Filter;
