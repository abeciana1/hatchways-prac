import React from 'react';
import moment from 'moment';



const WeatherCard = ({weatherData}: any) => {

const {
    temp,
    weather,
  } = weatherData

    return (
      <section className="weather-card">
        <div
          className="weather-day"
        >
          {moment().format('ddd') + " (today)"}
        </div>
          <img
          className="weather-img"
          src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
          alt={moment().format('ddd') + " - weather data"}
        />
        <div
          className="weather-temp"
        >
          {temp + " °F"}
        </div>
      </section>
    )
}

export default WeatherCard