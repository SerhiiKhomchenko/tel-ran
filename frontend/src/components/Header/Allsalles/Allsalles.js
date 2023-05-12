import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Allsalles() {
    const [discontedProducts, setDiscontedProducts] = useState([])

    useEffect(() => {
        let url = "http://localhost:3333/products/all";
        fetch(url)
            .then((res) => res.json())
            .then((data) => data.filter((product) => product.discont_price))
            .then((items) => setDiscontedProducts(items))
      });
   
    return(
        <div className="products_wrapper">
      <h2>All Salles</h2>
      <div>
        {discontedProducts.map((product) => (
          <div key={product.id}>
            <Link className="product_item" to={`/products/${product.id}`}>
              <img
                src={`http://localhost:3333/${product.image}`}
                alt="product_img"
              />
              <div className="price_box">
                  <p className="discont_price">{`${product.discont_price}$`}</p>
                  <p className="full_price">{`${product.price}$`}</p>
              </div>
              <h4>{product.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Allsalles