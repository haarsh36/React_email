import react from "react"
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton,Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import "./css/header.css"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import firebase from "firebase"
const Header = ()=>{
    const user = useSelector(selectUser)
    
    return (
        <div className="header">
            <div className="header__left">
                
                <img src="https://i.ibb.co/f9jRSk3/Whats-App-Image-2021-11-08-at-8-52-35-PM.jpg" 
                />
                
            </div>

            <div className="header__middle">
                <div className="search_mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type="text" placeholder="Search for an e-mail or contact"/>
                
                </div>
            </div>

            <div className="header__right">
            
            </div>
        </div>
    )
       
    
}

export default Header