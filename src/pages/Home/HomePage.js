import './HomePage.scss';
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

  
  // useEffect(() => {
  //   console.log("haaaa");
  // });


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
