import React from 'react'
import './user.css'
import { CalendarToday, PhoneIphone } from '@mui/icons-material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
export default function User(){
    return(
        <div className="user">
            <div className="UserTitleContainer">
                <h1 className="userTitle">Edit User</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className ="uesrShowToP">
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">박정재</span>
                            <div></div>
                            <span className="userShowUserTitle">컴공</span>
                        </div>
                    </div>
                    <div classNmae="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className='userShowInfo'>
                            <permIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">wjdwo3914</span>
                            </div>
                            <div className='userShowInfo'>
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">25.05.1999</span>
                            </div>
                            <div className='userShowInfo'>
                            <PhoneIphone className="userShowIcon"/>
                            <span className="userShowInfoTitle">010 1234 3914</span>
                        </div>
                        <div className='userShowInfo'>
                            <DirectionsCarIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">34두 1232</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate"> 
               
                    <span className="userUpdateTitel">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                type="text"
                                placeholder="wjdwo3914"
                                className="userUpdateInput"
                                />
                                </div>
                                <div className="userUpdateItem">
                                <label>Date</label>
                                <input
                                type="text"
                                placeholder="25.05.1999"
                                className="userUpdateInput"
                                />
                                </div>
                                <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                type="text"
                                placeholder="010 1234 1234"
                                className="userUpdateInput"
                                />
                                </div>
                                <div className="userUpdateItem">
                                <label>Car Num</label>
                                <input
                                type="text"
                                placeholder="34두 1232"
                                className="userUpdateInput"
                                />
                                 </div>
                                 <button className="userEditButton">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}