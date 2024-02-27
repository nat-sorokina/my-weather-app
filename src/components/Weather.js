import React, {useState,useEffect, useCallback} from 'react';
import WeatherDetails from './WeatherDetails';
import { getFormattedWeatherData } from '../OpenWeather';



function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState('metric');
    const [buttonText, setButtonText] = useState("°C");
    const [buttonClicked, setButtonClicked] = useState(false);


    const handleInput = (e) => {
        const value = e.currentTarget.value
        setCity(value);
        if (!value) {
            setWeather(null);
            setButtonClicked(false);
        }
     }

     const handleSearch = useCallback(async () => {
        try {
            const data = await getFormattedWeatherData(city, units);
            setWeather(data);
            setButtonClicked(true);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }, [city, units]);

    const handleUnitToggle = () => {
        setUnits(units === 'metric' ? "imperial" : "metric" );
        setButtonText(units === 'metric' ? "°F" : "°C" );
    }

    useEffect(() => {
        if (city && buttonClicked) {
            handleSearch()
        }
    }, [city, units, handleSearch, buttonClicked]);


    return (   
        <div className="section">
            <div className="location-input">      
                <input 
                placeholder="Search for a city"
                type="text"
                name="city"
                value={city}
                onChange={handleInput}
                />
                <button onClick={handleUnitToggle}>{buttonText}</button>
                <button onClick={handleSearch}>Search</button>
            </div>
            {buttonClicked && city && weather &&
            <>
            <div className="section-temperature">  
                <div className="icon">
                    <h1>{`${weather.name}, ${weather.country}`}</h1>
                    <img src={weather.iconURL} alt="weather-icon" />
                    <h3>{weather.description}</h3>
                </div>    
             
                <div className="temperature">
                  <h1>{`${Math.round(weather.temp)} °${units === 'metric' ? "C" : "F"}`}</h1>
                </div> 
            </div>
            
                <WeatherDetails
                weather={weather}
                units={units} /> 
            </>           
            } 
        </div>
    )  
          }
export default Weather;