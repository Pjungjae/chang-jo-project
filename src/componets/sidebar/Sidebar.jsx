import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

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
                    <li className="sidebarListItem">
                        <AppsIcon />
                        menu
                        </li>
                 
                </ul>
                <h3 className="sidebarTitle">Quick</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <DirectionsCarIcon />
                        car
                        </li>
                    <li className="sidebarListItem">
                        <PermIdentityIcon />
                        user
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Quick</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <ReportProblemIcon />
                        report
                        </li>
                    </ul>
            </div>
        </div>
    </div>
}