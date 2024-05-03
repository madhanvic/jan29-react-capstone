import { LoaderFunction, defer } from "react-router-dom";
import { credential } from "../../credential";

export interface Data {
  weather: {
    localtime: string;
    weatherImg: string;
    weather: string;
    temperature: string;
    pressure: string;
    wind: string;
    humidity: string;
  };
  news: {
    title: string;
    img: string;
    content: string;
  };
}

export const homeLoader: LoaderFunction = async () => {
  const coordinates: { latitude: null | number; longitude: null | number } = {
    latitude: null,
    longitude: null,
  };

  await window.navigator.geolocation.getCurrentPosition(
    async (coordinate) => {
      coordinates.latitude = coordinate.coords.latitude;
      coordinates.longitude = coordinate.coords.longitude;
    },
    async () => {
      console.warn(
        "Geolocation API doesn't working properly, So I am Showing the data of Chennai"
      );
      coordinates.latitude = null;
      coordinates.longitude = null;
    }
  );
  const weatherResponse = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${
      credential.weatherApiKey
    }&q=${
      coordinates.latitude && coordinates.longitude
        ? `${coordinates.latitude},${coordinates.longitude}`
        : "chennai"
    } `,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const weatherData = await weatherResponse.json();

  const newsResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${credential.newsApiKey}`
  );
  const newsData = await newsResponse.json();

  return defer({
    weather: {
      localtime: weatherData.location.localtime,
      weatherImg: weatherData.current.condition.icon,
      weather: weatherData.current.condition.text,
      temperature: weatherData.current.temp_c,
      pressure: weatherData.current.pressure_mb,
      wind: weatherData.current.wind_kph,
      humidity: weatherData.current.humidity,
    },
    news: {
      title: newsData.articles[0].title,
      img: newsData.articles[0].urlToImage,
      content: newsData.articles[0].description,
    },
  });
};
