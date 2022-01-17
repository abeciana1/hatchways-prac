
import moment from 'moment';



const WeatherCard = ({ weatherData }: any) => {

  const {
    dt,
    temp,
    weather,
  } = weatherData

  const date = new Date(dt * 1000)

    return (
      <section className="weather-card">
        <div
          className="weather-day"
        >
          {moment(date).format('ddd')}
        </div>
          <img
          className="weather-img"
          src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
          alt={moment(date).format('ddd') + " - weather data"}
        />
        <div
          className="weather-temp"
        >
          {temp?.day + " °F / " + temp?.night}
        </div>
      </section>
    )
}

export default WeatherCard