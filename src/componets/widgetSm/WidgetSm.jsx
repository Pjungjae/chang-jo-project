import React from 'react'
import './widgetSm.css'
import ReportIcon from '@mui/icons-material/Report';

export default function WidgetSm(){
    return <div className="widgetSm">
        <span className="widgetSmTitle">실시간 신고</span>
        <ReportIcon className="reportIcon" />
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">박정재</span>
                    <span className='widgetSmUserTitle'>컴퓨터공학과</span>
                </div>
                <button className="widgetSmButton">
                    확인
                </button>
            </li>
        </ul>
        </div>
}