import changeData from "./utils";

const domView = (() => {
  function showResult(weatherData) {
    if (!weatherData) return;

    const toggleBtn = document.getElementById("toggle-btn");
    const cityName = document.querySelector(".city");
    const icon = document.getElementById("icon");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const forecast = document.getElementById("forecast");
    const temp = document.getElementById("temp");

    const iconImg = changeData.changeIcon(weatherData.icon);
    const tempF = changeData.changeToF(weatherData.temp);
    const tempC = changeData.changeToC(weatherData.temp);
    const feelsLikeF = changeData.changeToF(weatherData.feelsLike);
    const feelsLikeC = changeData.changeToC(weatherData.feelsLike);

    cityName.textContent = `${weatherData.cityName}`;
    icon.src = "./assets/img/" + iconImg;
    feelsLike.textContent = "Feels like: " + feelsLikeF + " ºF";
    humidity.textContent = "Humidity: " + `${weatherData.humidity}` + "";
    forecast.textContent = `${weatherData.forecast}`;
    temp.textContent = "Temperature: " + tempF + " ºF";

    toggleBtn.addEventListener("click", () => {
      if ((temp.textContent = "Temperature: " + tempF + " ºF")) {
        temp.innerHTML = "Temperature: " + tempC + " ºC";
        feelsLike.innerHTML = "Feels like: " + feelsLikeC + " ºC";
        isCelsius = false;
      } else {
        temp.innerHTML = "Temperature: " + tempF + " ºF";
        feelsLike.innerHTML = "Feels like: " + feelsLikeF + " ºF";
      }
    });
  }

  return { showResult };
})();

export default domView;
