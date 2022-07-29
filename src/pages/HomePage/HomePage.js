
import InfoSections from '../../components/InfoSections/InfoSections';
import './HomePage.scss';
import Cards from "../../components/Cards/Cards";


import { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import { useHistory } from "react-router-dom";


function HomePage() {
  let history = useHistory();

  const [coords, setCoords] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    console.log(autocomplete);
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
    if(lat && lng){
      history.push({
        pathname: `/map`,
        search: `?lat=${lat}&lng=${lng}`
      });
    }
  };

  return (
    <div className="home">
      <section className='home-main'>
        <h1 className='home__title'>Find Free Parking</h1>
        <input placeholder="Enter an address" className='search-bar'></input>
        <button className='button-search' onClick={()=>setIsOpen(true)}>
          Find Free Parking
        </button>
      </section>
      <section className='home__align'>
        <InfoSections />
      </section>
      <Cards/>
      <Modal isOpen={isOpen} closer={()=>setIsOpen(false)} onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
    </div>
  );
}

export default HomePage;
