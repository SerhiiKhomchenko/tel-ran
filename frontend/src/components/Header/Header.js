import './Header.css'
import logo from './logo.jpg'
import basket from './Basket.png'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className="header">
             <img className='logo' src={logo} alt='logo'/>
              <div>
                  <Link className='catalog' to='/Catalog'>Catalog</Link>
              </div>
              <div className='wrapper'>
                    <Link to='/' className='MainPage'>Main Page</Link>
                    <Link to='/Allproducts'>All Products</Link>
                    <Link to='/Allsalles'>All Salles</Link>
              </div>
             <Link to='/Card' className='basket'><img className='basket' src={basket} alt ='basket'/></Link>
        </div>
    )
}

export default Header