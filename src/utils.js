const changeData = (() => {
  function changeIcon(icon) {
    if (icon === "01d") {
      return "clearsky-day.svg";
    } else if (icon === "01n") {
      return "clearsky-night.svg";
    } else if (icon === "02d") {
      return "fewclouds-day.svg";
    } else if (icon === "02n") {
      return "fewclouds-night.svg";
    } else if (icon === "03n" || icon === "03d") {
      return "scatteredclouds.svg";
    } else if (icon === "04n" || icon === "04d") {
      return "scatteredclouds.svg";
    } else if (icon === "09d") {
      return "showerain-day.svg";
    } else if (icon === "09n") {
      return "showerain-night.svg";
    } else if (icon === "10d") {
      return "rain-day.svg";
    } else if (icon === "10n") {
      return "rain-night.svg";
    } else if (icon === "11d") {
      return "thunderstorm-day.svg";
    } else if (icon === "11n") {
      return "thunderstorm-night.svg";
    } else if (icon === "13d") {
      return "snow-day.svg";
    } else if (icon === "13n") {
      return "snow-night.svg";
    } else if (icon === "50d") {
      return "mist-day.svg";
    } else if (icon === "50n") {
      return "mist-night.svg";
    }
  }

  return { changeIcon };
})();

export default changeData;
