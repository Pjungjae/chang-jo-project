import React from 'react'
import LocalParkingIcon from '@mui/icons-material/LocalParking';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <LocalParkingIcon />
                </div>
            </div>
        </div>
    )
}