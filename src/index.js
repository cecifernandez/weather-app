import weatherAPI from "./weatherAPI";
import cityAPI from "./cityAPI";

const buscarBtn = document.getElementById("buscar");

buscarBtn.addEventListener("click", async () => {
  const userCity = document.getElementById("city").value;
  console.log(await weatherAPI.getLocation(userCity));
  cityAPI.getImage(userCity);
});
