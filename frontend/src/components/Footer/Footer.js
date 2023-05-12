import './Footer.css'
import Iframe from 'react-iframe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return(
        <div className="footer">
            <div className='info'>
                <div className="contact">
                    <h2>Contact</h2>
                    <p>+49 999 999 99 99</p>
                </div>
                <div className="adress">
                    <h2>Adress</h2>
                    <a href='https://www.google.com/search?q=telranDE' target="blank">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                </div>
                <div className="social_networks">
                    <a href='https://www.instagram.com/' target="blank">
                        <FontAwesomeIcon className='Instagram' icon= {faInstagram}></FontAwesomeIcon>
                    </a>
                    <a href='https://www.whatsapp.com/' target="blank">
                        <FontAwesomeIcon className='WhatsApp' icon= {faWhatsapp}></FontAwesomeIcon>
                    </a>
                </div>
                <div className='workTime'>
                    <h2>Working Hours:</h2>
                    <p>24 hours a day</p>
                </div>
            </div>
               <div className='map'>
               <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750825!2d13.37285601580702!3d52.50793287981184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sde!2sde!4v1679175821996!5m2!1sde!2sde" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
               </div>
        </div>
    )
}

export default Footer