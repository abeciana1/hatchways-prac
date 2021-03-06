import React, {useState, useEffect} from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'
// import data from './weather-source.json'

//! https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// ! Burlington VT -  [44.4759, -73.2121]

//! icons = http://openweathermap.org/img/wn/10d@2x.png

// const weatherData = {
//     "dt": 1642370818,
//     "sunrise": 1642335910,
//     "sunset": 1642369179,
//     "temp": 17.42,
//     "feels_like": 6.19,
//     "pressure": 1021,
//     "humidity": 34,
//     "dew_point": -3.78,
//     "uvi": 0,
//     "clouds": 40,
//     "visibility": 10000,
//     "wind_speed": 9.22,
//     "wind_deg": 180,
//     "weather": [
//         {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03n"
//         }
//     ]
// }

function App() {

  const [weatherData, setWeatherData] = useState<any[]>([])

  // * using this because of limited api calls on
  // useEffect(() => {
  //   setWeatherData(data?.daily)
  // }, [weatherData])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=44.4759&lon=-73.2121&exclude=minutely&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setWeatherData(data?.daily)
      })
  }, [])

  return (
    <section
      className="weather-render"
    >
      {weatherData.slice(0,5)?.map((weather) => {
        return <WeatherCard weatherData={weather} />
      })}
    </section>
  );
}

export default App;
