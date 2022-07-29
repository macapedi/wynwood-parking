
import './Cards.scss';
import card1violeta from "../../assets/images/card1violeta.png"
import card2 from "../../assets/images/card2.png"
import card3rosada from "../../assets/images/card3rosada.png"



function Cards() {
    return (
        <div className="cards">
            
            <img src={card2} alt="information for tier 2" className='card-image'></img>
            <img src={card1violeta} alt="information for tier 1" className='card-image card-image--up'></img>
            <img src={card3rosada} alt="information for tier 3" className='card-image'></img>
            
        </div>
    );
}

export default Cards;