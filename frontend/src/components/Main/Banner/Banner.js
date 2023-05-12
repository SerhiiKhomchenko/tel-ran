import './Banner.css'
import banner from './Banner.png'

function Banner(){
    return(
        <div className='banner_wrapper'>
            <div>
                <h2>Sale</h2>
                <p>New season</p>
                <div className='sale_button'>
                     <button>Sale</button>
                </div>
            </div> 
            <div className='banner_pct'>
                <img src={banner} alt='banner_pct'/>           
            </div>
        </div>
    )
}

export default Banner