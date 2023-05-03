import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MessageIcon from '@mui/icons-material/Message';
import { Link} from 'react-router-dom'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function sidebar(){
    return <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Menu</h3>
                <ul className="sidebarList">
                    <Link to="/home" className="link">
                    <li className="sidebarListItem">
                        <HomeIcon />
                        Home
                        </li>
                 </Link>
                <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PersonOutlineOutlinedIcon className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    <Link to="/newUser" className="link">
                    <li className="sidebarListItem">
                            <PersonAddAltIcon className="sidebarIcon"/>
                            New User
                        </li>
                        </Link>
                    </ul>

                    <h3 className="sidebarTitle">Quick</h3>
                <ul className="sidebarList">
                <Link to="/report" className="link">
                <li className="sidebarListItem">
                        <ReportProblemIcon />
                        Report
                        </li>
                        </Link>
                        <Link to="/messages" className="link">
                        <li className="sidebarListItem">
                        <MessageIcon />
                        Messages
                        </li>
                        </Link>
                    </ul>

            </div>
        </div>
    </div>
}