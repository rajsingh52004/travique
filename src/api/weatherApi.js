import axios from "axios";

export const getWeather = async (city) => {
  try {
    const geo = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    if (!geo.data.results?.length) return null;

    const { latitude, longitude } = geo.data.results[0];

    const weather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    return weather.data.current_weather;
  } catch (error) {
    console.log(error);
    return null;
  }
};