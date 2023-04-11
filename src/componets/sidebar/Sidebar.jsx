import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MessageIcon from '@mui/icons-material/Message';

export default function sidebar(){
    return <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashborad</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HomeIcon />
                        Home
                        </li>
                 
                </ul>
                <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <DirectionsCarIcon />
                        Car
                        </li>
                    <li className="sidebarListItem">
                        <PermIdentityIcon />
                        User
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Quick</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <ReportProblemIcon />
                        Report
                        </li>
                        <li className="sidebarListItem">
                        <MessageIcon />
                        Messages
                        </li>
                    </ul>

            </div>
        </div>
    </div>
}