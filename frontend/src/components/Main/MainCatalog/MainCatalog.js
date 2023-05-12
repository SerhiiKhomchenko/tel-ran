import './MainCatalog.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MainCatalog(){
    let [categories, setCategories] = useState([])

    useEffect(() => {
        let url = 'http://localhost:3333/categories/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data.slice(0,4)))
    },[])
    return(
        <div>
            <div className='catalog_wrapper'>
                <h2>Catalog</h2>
            <div className='button_div'> 
                <Link className='button' to ='/Catalog'>All categories</Link>
            </div>
            </div>   
               <div className='categories_block'>
                {categories.map(category => 
                    <div key={category.id}>
                        <Link className='category' to={`/categories/${category.id}`}>
                            <img src={`http://localhost:3333${category.image}`} alt='category'/>
                            <h2>{category.title} </h2>   
                        </Link>
                    </div>
                    )}   
               </div>
        </div>
    )
}

export default MainCatalog