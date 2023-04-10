import React from 'react'
import './widgetSm.css'

export default function WidgetSm(){
    return <div className="widgetSm">
        <span className="widgetSmTitle">New Join Member</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img
                src=""
                alt=""
                className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">박정재</span>
                    <span className='widgetSmUserTitle'>Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <visibilityIcon />
                    Display
                </button>
            </li>
        </ul>
        </div>
}