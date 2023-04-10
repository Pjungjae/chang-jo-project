import React from 'react'
import Info from '../../componets/info/Info'
import './home.css'
import WidgetSm from '../../componets/widgetSm/WidgetSm'
import WidgetLg from '../../componets/widgetLg/WidgetLg'

export default function Home(){
    return <div className="home">
        <Info />
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
}