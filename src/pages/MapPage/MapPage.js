
import './MapPage.scss';
import GoogleMapReact from 'google-map-react';
import data from '../../data/data.json';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddressCard from '../../components/AddressCard/AddressCard';


const APIURL = "https://bstn-cris-industry-api.herokuapp.com/location";

const center = {
  lat: 25.799904,
  lng: -80.199119
};

let geoCodedAddress = null;
let geoCodedSearchBarSelection = null;
const MapPage= () => {

  // for (const [key, value] of searchParams) {
  //   console.log({ key, value }) // {key: 'term', value: 'pizza'} {key: 'location', value: 'Bangalore'}
  // }

  const [childClicked, setChildClicked] = useState(null);
  
  const searchParams = new URLSearchParams(window.location.search);
    
  const [spaces, setSpaces] = useState([]);

  useEffect(()=>{
    axios(APIURL).then(spaces=>{console.log(spaces); setSpaces(spaces.data);})
  }, []);

  useEffect(() => {
    async function geoCode(lat, lng){
      let resp;
      try {
        //resp = await axios(`https://maps.googleapis.com/maps/api/geocode/json?lating=${lat},${lng}&key=AIzaSyDch7b3aIdDo3N0L7XdAW1Yf2wawxa1Lgc`)
        resp = await axios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDch7b3aIdDo3N0L7XdAW1Yf2wawxa1Lgc`);
        console.log(resp);
        geoCodedSearchBarSelection = resp;
        return resp + " ";
      } catch (error) {
        console.log(error);
      }
    };

    geoCode(searchParams.get("lat"),searchParams.get("lng"));
  }
  ,[searchParams]);


  useEffect(() => {
    //console.log(childClicked);
    if(childClicked === null) return;
    async function geoCode(lat, lng){
      let resp;
      try {
        //resp = await axios(`https://maps.googleapis.com/maps/api/geocode/json?lating=${lat},${lng}&key=AIzaSyDch7b3aIdDo3N0L7XdAW1Yf2wawxa1Lgc`)
        resp = await axios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDch7b3aIdDo3N0L7XdAW1Yf2wawxa1Lgc`);
        console.log(resp);
        geoCodedAddress = resp;
        return resp + " ";
      } catch (error) {
        console.log(error);
      }
    };

    geoCode(data[childClicked].latitude,data[childClicked].longitude);
  }
  ,[childClicked]);

  

  
  return (
    <div className='mapPage'>
      <div className='map__info'>
        <p>Park now</p>
        <h3>{geoCodedSearchBarSelection && geoCodedSearchBarSelection.data.results[0].formatted_address}</h3>
      </div>
    <div className="map" style={{ height: '50vh', width: '80%' }}>
      
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
          {/* {data.map((place,i)=>{
            //console.log(place);
            return <div className='marker' 
            lat={place.latitude}
            lng={place.longitude}
            key={i}
            />
          })} */}
          {spaces.map((place,i)=>{
            //console.log(place);
            return <div className='marker' 
            lat={place.latitude}
            lng={place.longitude}
            key={i}
            />
          })}

        </GoogleMapReact>

      {/* <div>{childClicked ? (()=>{geoCode(data[childClicked].latitude,data[childClicked].longitude)}):("nothing selected")}</div> */}
      {/* <div>{geoCodedAddress ? (geoCodedAddress.data.results[0].formatted_address):("nothing!")}</div> */}
      <div>{geoCodedAddress ? 
      (<AddressCard coords={{lat:data[childClicked].latitude, lng: data[childClicked].longitude}} title={geoCodedAddress.data.results[0].formatted_address}/>)
      :
      ("")}</div>
      
      {/* <AddressCard coords={{lat:data[childClicked].latitude, lng: data[childClicked].longitude}} title={geoCodedAddress.data.results[0].formatted_address}/> */}
    </div>
    </div>
  );
}

export default MapPage;
