import "./Modal.scss";

import ReactDOM from "react-dom"; 
import useStyles from './styles.js';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@mui/icons-material/Clear';
const Modal = ({isOpen, closer, onPlaceChanged, onLoad})=> {

    const classes = useStyles();
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
                    <div className="modalOverlay">
                        {/* <div className="modal__close" onClick={closer}> */}
                        
                        <ClearIcon onClick={closer}/>
                        <h1 className="page-header">
                                {`Find Free Parking`}
                        </h1>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    
                                </div>
                                <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                            </div>
                        </Autocomplete>
                        {/* </div> */}
                    </div>
                </>
            ):(null)
        }
        
    </>
  ,document.getElementById("portal") );
}

export default Modal;
