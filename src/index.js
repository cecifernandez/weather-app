import weatherAPI from "./weatherAPI";
import cityAPI from "./cityAPI";

const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", async () => {
  const userCity = document.getElementById("city").value;
  console.log(await weatherAPI.getLocation(userCity));
  cityAPI.getImage(userCity);
});
