const changeData = (() => {
  function changeIcon(icon) {
    switch (icon) {
      case "01d":
        return "clearsky-day.svg";
      case "01n":
        return "clearsky-night.svg";
      case "02d":
        return "fewclouds-day.svg";
      case "02n":
        return "fewclouds-night.svg";
      case "03n":
        return "scatteredclouds.svg";
      case "03d":
        return "scatteredclouds.svg";
      case "04n":
        return "scatteredclouds.svg";
      case "04d":
        return "scatteredclouds.svg";
      case "09d":
        return "showerain-day.svg";
      case "09n":
        return "showerain-night.svg";
      case "10d":
        return "rain-day.svg";
      case "10n":
        return "rain-night.svg";
      case "11d":
        return "thunderstorm-day.svg";
      case "11n":
        return "thunderstorm-night.svg";
      case "13d":
        return "snow-day.svg";
      case "13n":
        return "snow-night.svg";
      case "50d":
        return "mist-day.svg";
      case "50n":
        return "mist-night.svg";
      default:
    }
    return false;
  }

  function changeToF(temp) {
    return Math.round(1.8 * (temp - 273) + 32);
  }

  function changeToC(temp) {
    return Math.round(temp - 273);
  }

  return { changeIcon, changeToF, changeToC };
})();

export default changeData;
