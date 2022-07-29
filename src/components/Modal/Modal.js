import "./Modal.scss";

import ReactDOM from "react-dom"; 
import useStyles from './styles.js';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
                    <button onClick={closer}>close</button>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </>
            ):(null)
        }
        
    </>
  ,document.getElementById("portal") );
}

export default Modal;
