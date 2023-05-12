import { Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Category.css'

function Category(){
    const {id} = useParams()
     let [category, setCategory] = useState({})
     let [products, setProducts] = useState([])


     useEffect(() => {
        let url = `http://localhost:3333/categories/${id}/`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategory(data.category)
                setProducts(data.data)
            })   
     },[])

    const discont = (fullPrice, discountPrice) => {
       return  Math.floor(((fullPrice - discountPrice)*100)/fullPrice)
    }

     return(
        <div className='products_wrapper'>
            <h2>{category.title}</h2>
            <div>
                {products.map(product => 
                    <div>
                    <Link className='product_item' to={`/products/${product.id}`}>
                        <img src= {`http://localhost:3333/${product.image}`} alt='product_img'/>
                        {product.discont_price ?
                            <div>
                                <p className='discont_price'>{`${product.discont_price}$`}</p>
                                <p className='full_price'>{`${product.price}$`}</p>
                                <p className='discont'>{discont(product.price, product.discont_price)}%</p>
                            </div> :
                                <p className='full_price'>{`${product.price}$`}</p>
                        }
                        <h4>{product.title}</h4>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}

export default Category