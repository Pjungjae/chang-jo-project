import React from 'react'
import './Topbar.css'
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <LocalParkingIcon />
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                <LoginIcon />
                <VpnKeyIcon />
                <NotificationsIcon />
                <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}