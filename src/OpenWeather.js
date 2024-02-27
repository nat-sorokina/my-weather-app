const APIkey = '5da2269b7ee2f42a0d1f5c23a0048d02';

const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

export const getFormattedWeatherData = async(city, units) => {
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch(error => {
        console.error('An error occurred: ', error.message)
      });
    
    const {weather, 
           main: { temp, feels_like, temp_min, temp_max, pressure, humidity},
           wind: {speed},
           sys: {country},
           name} = data;
    const {description, icon} = weather[0];

    return {
        description,
        iconURL: makeIconURL(icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name
    }
    }


