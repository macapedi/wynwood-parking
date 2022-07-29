
import './MapPage.scss';
import GoogleMapReact from 'google-map-react';
import data from '../../data/data.json';
import React, { useState } from 'react';


const center = {
  lat: 25.799904,
  lng: -80.199119
};

const MapPage= () => {

  const searchParams = new URLSearchParams(window.location.search);
  // for (const [key, value] of searchParams) {
  //   console.log({ key, value }) // {key: 'term', value: 'pizza'} {key: 'location', value: 'Bangalore'}
  // }

  const [childClicked, setChildClicked] = useState(null);

  return (
    <div className="App" style={{ height: '100vh', width: '100%' }}>

      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDch7b3aIdDo3N0L7XdAW1Yf2wawxa1Lgc'}}
        defaultCenter={center}
        center={center}
        defaultZoom={15}
        margin={[50,50,50,50]}
        onChildClick={(child) => {
          console.log(child);
          setChildClicked(child);}}
        >
          {data.map((place,i)=>{
            //console.log(place);
            return <div className='marker' 
            lat={place.latitude}
            lng={place.longitude}
            key={i}
            />
          })}

        </GoogleMapReact>

      <div>{childClicked ? (data[childClicked].latitude + " " + data[childClicked].longitude):("nothing selected")}</div>
    </div>
  );
}

export default MapPage;
