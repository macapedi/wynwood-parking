
import './Cards.scss';
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"



function Cards() {
    return (
        <div className="cards">
            <img src={card1} alt="information for tier 1" className='card-image'></img>
            <img src={card2} alt="information for tier 2" className='card-image'></img>
            <img src={card3} alt="information for tier 3" className='card-image'></img>
            
        </div>
    );
}

export default Cards;