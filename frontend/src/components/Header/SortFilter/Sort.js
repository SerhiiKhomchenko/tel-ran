import './Sort.css'
import { useDispatch,  } from "react-redux";
import { sortItemAction } from "../../../store/ProductsReducer";


function Sort() {
  const dispatch = useDispatch();

  function handleFunction(e) {
    dispatch(sortItemAction(e.target.value))
  }
  
  return (
    <div className='sort_block'>
      <h4>Sorted</h4>
      <select onChange={(e) => handleFunction(e)}>
        <option value="By default">By default</option>
        <option value="High to low">High to low</option>
        <option value="Low to high">Low to high</option>
      </select>
    </div>
  );
}

export default Sort;
