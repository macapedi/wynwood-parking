import './HomePage.scss';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';


function HomePage() {
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
  };


  return (
    <>
      <div className="App">
      <button onClick={()=>setIsOpen(true)}> OpenModal</button>
      </div>
      <Modal isOpen={isOpen} closer={()=>setIsOpen(false)} onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
    </>
    
  );
}

export default HomePage;
