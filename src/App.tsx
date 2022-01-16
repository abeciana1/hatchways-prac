import React, {useState, useEffect} from 'react';
import './App.css';

//! https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// ! Burlington VT -  [44.4759, -73.2121]

//! icons = http://openweathermap.org/img/wn/10d@2x.png

function App() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=44.4759&lon=-73.2121&exclude=minutely,hourly,daily,alerts&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data?.current)
      })
  }, [])

  console.log(weather)

  return (
    <div className="App">
    </div>
  );
}

export default App;
