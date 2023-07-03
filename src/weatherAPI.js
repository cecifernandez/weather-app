const weatherAPI = (() => {
  function convertData(data) {
    const {
      name: cityName,
      main: { temp, feels_like: feelsLike, humidity },
      weather: [{ icon, main: forecast }],
    } = data;

    return { cityName, temp, feelsLike, humidity, icon, forecast };
  }

  async function getLocation(city) {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=3c76638c4deaee40b1a940d5c11f3d55"
      );
      const data = convertData(await response.json());
      return data;
    } catch (err) {
      console.error("error occurred: ", err.message);
    }
  }

  return { getLocation };
})();

export default weatherAPI;
