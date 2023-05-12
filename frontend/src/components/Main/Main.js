import './Main.css'
import Banner from './Banner/Banner'
import Coupon from './Coupon/Coupon'
import MainCatalog from './MainCatalog/MainCatalog'

function Main(){
    return(
        <div className='main_wrapper'>
            <Banner/>
            <MainCatalog/>
            <Coupon/>
        </div>
    )
}

export default Main