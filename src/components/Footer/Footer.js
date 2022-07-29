
import './Footer.scss';
import facebook from "../../assets/logos/facebook.png";
import yelp from "../../assets/logos/yelp.png";




function Footer() {
    return (
        <div className="footer">
            <h2>Contact Us</h2>
            <p>hello@wynpark.com</p>
            <p>786-996-7275</p>
            <div className='logos'>
                <img src={facebook} className='logo'></img>
                <img src={yelp} className='logo'></img>
            </div>
        </div>
    );
}

export default Footer;