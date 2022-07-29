import { Link } from "react-router-dom";
const AddressCard = ({coords, title}) => {

  
    return (
      <div className="card">
        {title}
        <a href={`https://www.google.com/maps/search/?api=1&query=${coords.lat}%2C${coords.lng}`}>
            <button>Take Me To Park</button>
        </a>
      </div>
    );
  }
  
  export default AddressCard;