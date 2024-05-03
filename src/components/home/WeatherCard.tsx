import { useAsyncValue } from "react-router-dom";
import { Data } from "../../lib/loader/homeLoader";

const WeatherCard = () => {
  const data = useAsyncValue() as Data;

  const dateObj = new Date(data.weather.localtime);

  const date = `${
    Number(dateObj.getMonth()) < 10
      ? `0${dateObj.getMonth()}`
      : `${dateObj.getMonth()}`
  }-${
    Number(dateObj.getDate()) < 10
      ? `0${dateObj.getDate()}`
      : `${dateObj.getDate()}`
  }-${dateObj.getFullYear()}`;

  const time = `${
    Number(dateObj.getHours() > 12)
      ? Number(dateObj.getHours()) - 12 < 10
        ? `0${Number(dateObj.getHours()) - 12}`
        : `${Number(dateObj.getHours()) - 12}`
      : Number(dateObj.getHours()) < 10
      ? `0${Number(dateObj.getHours())}`
      : `${Number(dateObj.getHours())}`
  }:${
    Number(dateObj.getMinutes()) < 10
      ? `0${dateObj.getMinutes()}`
      : `${dateObj.getMinutes()}`
  }`;

  return (
    <>
      <div className="weather__card--time">
        <p>{date}</p>
        <p>{time} PM</p>
      </div>
      <div className="weather__card--info">
        <div className="weather__card--weather">
          <img alt="weather" src={data.weather.weatherImg} />
          <p className="weather__card--weather-text">{data.weather.weather}</p>
        </div>
        <div className="bar"></div>
        <div className="weather__card--celcius">
          <p className="weather__card--celcius--text">
            {data.weather.temperature}
            <sup>&deg;</sup>C
          </p>
          <p className="weather__card--celcius--details">
            <img alt="theromometer" src="/src/assets/images/termo.png" />
            <small>
              {data.weather.pressure} mbar <br /> Pressure
            </small>
          </p>
        </div>
        <div className="bar"></div>
        <div className="weather__card--wind_humidity">
          <p className="weather__card--wind-details">
            <img alt="wind" src="/src/assets/images/wind.png" />
            <small>
              {data.weather.wind}kp/h <br /> Wind
            </small>
          </p>
          <p className="weather__card--humidity-details">
            <img alt="wind" src="/src/assets/images/humidity.png" />
            <small>
              {data.weather.humidity}% <br /> Humidity
            </small>
          </p>
        </div>
      </div>
    </>
  );
};
export default WeatherCard;
