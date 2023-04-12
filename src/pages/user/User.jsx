import React from 'react'
import './user.css'
import { CalendarToday, PhoneIphone } from '@mui/icons-material'

export default function User(){
    return(
        <div className="user">
            <div className="UserTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className ="uesrShowToP">
                        <img
                        src="../img/R.jpg"
                        alt=""
                        className="userShowImg"
                        />
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
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}