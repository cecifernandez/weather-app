import changeData from "./utils";

const domView = (() => {
  function showResult(weatherData) {
    if (!weatherData) return;
    const cityName = document.querySelector(".city");
    const icon = document.getElementById("icon");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const forecast = document.getElementById("forecast");
    const temp = document.getElementById("temp");
    const iconImg = changeData.changeIcon(weatherData.icon);
    cityName.textContent = `${weatherData.cityName}`;
    icon.src = "./assets/img/" + iconImg;
    feelsLike.textContent = `${weatherData.feelsLike}`;
    humidity.textContent = `${weatherData.humidity}`;
    forecast.textContent = `${weatherData.forecast}`;
    temp.textContent = `${weatherData.temp}º K`;
  }

  return { showResult };
})();

export default domView;
