import React from 'react'
import './newUser.css'

export default function NewUser(){
    return( <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type ="text" placeholder='john' />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type ="text" placeholder='john@gmail.com' />
            </div>
            <div className="newUserItem">
                <label>PassWord</label>
                <input type ="text" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type ="text" placeholder='010 1234 1234' />
            </div>
            <div className="newUserItem">
                <label>Car Num</label>
                <input type ="text" placeholder='31라 4564' />
            </div>
            <div className='newUserItem'>
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">yes</option>
                    <option vlaue="no">no</option>
                </select>
                </div>      
            <div className="newUserButton">
                Create
                </div>     
        </form>
        </div>
    )
}