
import './InfoSections.scss';
import car from "../../assets/images/car.png";



function InfoSections() {
    return (
        <div className="info">
            <div className='info-main'>
                <h2 className='info__title'>Don't waste valuable time looking for parking spaces!</h2>
                <div className='info-container'>
                    <p>Subscribe to our monthly membership for exclusive savings on parking</p>
                    <img src={car} className="car" alt="cartoon car with a dog and a man"></img>
                </div>

            </div>

        </div>
    );
}

export default InfoSections;
