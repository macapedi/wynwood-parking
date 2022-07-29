import "./Modal.scss";

import ReactDOM from "react-dom"; 

import { Autocomplete } from '@react-google-maps/api';

const Modal = ({isOpen, closer})=> {

    let deleteHandler = async ()=>{
        //let deleteReponse = await delete()
        //console.log("deleting: "  + props.inventorySelected.itemName);
        //props.closerCallback();
        //props.deleteInventoryHandler();
    }
  return ReactDOM.createPortal(
    <>
        {
            isOpen ?
            (
                <> 
                    <button onClick={closer}>close</button>
                    {/* <Autocomplete>
                        
                    </Autocomplete> */}
                </>
            ):(null)
        }
        
    </>
  ,document.getElementById("portal") );
}

export default Modal;
