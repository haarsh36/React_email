import React from 'react'
import "./css/emaillist.css";
import { IconButton,Avatar } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';

import StarIcon from '@material-ui/icons/Star';
import ReplyIcon from '@material-ui/icons/Reply';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedMail} from "./features/mailSlice"

function Emaildetail() {

    const mail = useSelector(selectedMail);

    console.log(mail);
    const history = useHistory()
    return (
        <div className="emaildetails">
        <div className="emailist__settings">
            <div className="emailist__settingsLeft">
                <IconButton>
                <ArrowBackIcon onClick={()=>history.push('/')}/>
                </IconButton>
                <IconButton>
                <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                <RefreshIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
               
            <div className="emailist__settingsRight">
               
                <IconButton>
                <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                <ChevronRightIcon />
                </IconButton>
            </div>
        </div>

        <div className="emaildetails_message">
        <div className="emaildetails__header">
            <div className="emaildetails__headerLeft">
                <h4>{mail.subject}</h4>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>

            <div className="emaildetails__headerRight">
            <IconButton>
                <PrintIcon />
                </IconButton>

                <IconButton>
                <LaunchIcon />
                </IconButton>
            </div>
        </div>


        <div className="emaildetails__middleheader">
            <div className="emaildetails__middleheaderLeft">
               
                <IconButton>
                    <Avatar/>
                </IconButton>
                <h4>{mail.name}</h4>
                <p>{mail.email}</p>
            </div>

            <div className="emaildetails__middleheaderRight">
            
                <p>{mail.time}</p>
             <IconButton>
                <StarIcon />
                </IconButton>

                <IconButton>
                <ReplyIcon />
                </IconButton>

                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>

            
        </div>
        <div className="emaildetails_body">
                <p>{mail.message}</p>
            </div>
        </div>
        </div>
    )
}

export default Emaildetail
