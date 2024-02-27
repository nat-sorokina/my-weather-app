import React from 'react';
import './WeatherDetails.css';
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa6";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

function WeatherDetails({weather, units}) {
    const tempUnit = units === 'metric' ? "°C" : "°F";
    const windUnit = units === 'metric' ? "m/s" : "m/h";
    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: 'min',
            data: Math.round(weather.temp_min),
            unit: tempUnit
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: 'max',
            data: Math.round(weather.temp_max),
            unit: tempUnit
        },
        {
            id: 3,
            icon: <FaWind />,
            title: 'wind',
            data: Math.round(weather.speed),
            unit: windUnit
        },
        {
            id: 4,
            icon: <BiHappy />,
            title: 'feels like',
            data: Math.round(weather.feels_like),
            unit: tempUnit
        },
        {
            id: 5,
            icon: <MdCompress />,
            title: 'pressure',
            data: weather.pressure,
            unit: 'hPa'
        },
        {
            id: 6,
            icon: <MdOutlineWaterDrop />,
            title: 'humidity',
            data: weather.humidity,
            unit: '%'
        }
    ]

    return (
        <div className="section-weather-details">
            {cards.map(({id,icon,title,data,unit}) => {
                return(
                <div key={id} className="card">
                <div className="weather-card-icon">
                {icon}
                    <small>{title}</small>
                </div>
                <h2>{`${data} ${unit}`}</h2>
            </div>
            )})}          
        </div>
    )
}

export default WeatherDetails;