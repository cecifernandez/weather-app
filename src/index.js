import weatherAPI from "./weatherAPI";
import domView from "./dom";
import cityAPI from "./cityAPI";

const searchBtn = document.getElementById("search");
async function defaultDom() {
  const defaultData = await weatherAPI.getLocation("Buenos Aires");
  cityAPI.getImage(defaultData);

  domView.showResult(defaultData);
}


defaultDom();


searchBtn.addEventListener("click", async () => {
  const userCity = document.getElementById("city").value;
  const weatherData = await weatherAPI.getLocation(userCity);
  cityAPI.getImage(userCity);
  domView.showResult(weatherData);
});
