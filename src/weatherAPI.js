const weatherAPI = (() => {
  async function getLocation(city) {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=3c76638c4deaee40b1a940d5c11f3d55"
      );
      const data = await response.json();
      return data.coord;
    } catch (err) {
      console.error("error occured: ", err.message);
    }
  }

  return { getLocation };
})();

export default weatherAPI;
