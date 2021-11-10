import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./css/sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarRateIcon from '@material-ui/icons/StarRate';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelIcon from '@material-ui/icons/Label';
import DeleteIcon from '@material-ui/icons/Delete';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button className="compose__btn" onClick={() => dispatch(openSendMessage())}>
        Compose
      </Button>
      <hr/>

      <h3 className="sidebarOptions__heading">
        Folders
      </h3>
      <hr/>
      <Sidebaroptions Icon={InboxIcon} title={"Inbox"} isactive={true}/>
      <hr/>
      <Sidebaroptions Icon={SendIcon} title={"Sent"} />
      <hr/>
      <Sidebaroptions Icon={DraftsIcon} title={"Drafts"} />
      <hr/>
      <Sidebaroptions Icon={SendIcon} title={"Spam"}  />
      <hr/>
      <Sidebaroptions Icon={DeleteIcon} title={"Trash"} />




      <hr />
      <h3 className="sidebarOptions__heading">
        Filter
      </h3>
      <hr/>
      <Sidebaroptions Icon={StarRateIcon} title={"Starred"}/>
      <hr/>
      <Sidebaroptions
        Icon={LabelImportantIcon}
        title={"Important"}
        
      />
<hr/>
      <h3 className="sidebarOptions__heading">
        Labels
      </h3>
      <hr/>
      <Sidebaroptions Icon={LabelIcon} title={"Note"} />
      <hr/>
      <Sidebaroptions Icon={LabelIcon} title={"Paypal"}/>
      <hr/>
      <Sidebaroptions Icon={LabelIcon} title={"Invoice"}/>
      <hr/>
      <Sidebaroptions Icon={LabelIcon} title={"Amazon"} />
      <hr/>
    </div>
  );
}

export default Sidebar;
