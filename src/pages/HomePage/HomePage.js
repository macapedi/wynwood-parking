
import InfoSections from '../../components/InfoSections/InfoSections';
import './HomePage.scss';
import Button from '@mui/material/Button'
import geolocation from "../../assets/logos/geolocation.png"




function HomePage() {
  return (
    <div className="home">
      <section className='home-main'>
        <h1 className='home__title'>Find Free Parking</h1>
        <input placeholder="Enter an address" className='search-bar'></input>
        <button className='button-search'>
          Find Free Parking
        </button>
      </section>
      <section className='home__align'>
        <InfoSections />
      </section>
      <Cards/>
    </div>
  );
}

export default HomePage;
