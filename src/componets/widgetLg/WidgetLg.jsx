import React from 'react'
import './widgetLg.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
export default function WidgetLg(){
    return (
    <div className="widgetLg">
        <span className="widgetLgTitle">새로운 가입 신청</span>
        <ul className="widgetLgList">
            <li className="widgetLgListItem">
                <img
                src="img/R.jpg"
                alt=""
                className="widgetLgImg"
                />
                <div className="widgetLgUser">
                    <span className="widgetLgUsername">박정재</span>
                    <span className="widgetLgUserTilte">컴퓨터 공학과</span>
                <button className="widgetLgButton">
                    <CheckBoxIcon className="checkButton" />
                    승인
                </button>
                </div>
            </li>
        </ul>
    </div>
    )
}