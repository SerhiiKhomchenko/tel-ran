import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Catalog.css'

function Catalog(){
    let [categories, setCategories] = useState([])

    useEffect(() => {
        let url = 'http://localhost:3333/categories/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])

    return(
        <div className='categories_wrapper'>
        <h2>Categories</h2>
            <div className='categories'>
                {categories.map(category => 
                    <div key={category.id}>
                        <Link className='category' to={`/categories/${category.id}`}>
                            <img src={`http://localhost:3333${category.image}`} alt='categorie'/>
                            <h2>{category.title} </h2>   
                        </Link>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Catalog