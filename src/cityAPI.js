const cityAPI = (() => {
  const img = document.getElementById("image");

  async function getImage(query) {
    try {
      const response = await fetch(
        "https://api.unsplash.com/search/photos?query=" +
          "city " +
          query +
          "&orientation=landscape&client_id=-IshjZJzwRwoK5HToCA8cp_K9COyXK25Fhqa-Fh82tg",
        { mode: "cors" }
      );

      if (!response.ok) {
        throw new Error("Unable to fetch image data.");
      }

      const data = await response.json();

      if (
        data.results &&
        data.results.length > 0 &&
        data.results[0].urls &&
        data.results[0].urls.regular
      ) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        img.style.background =
          "url(" + data.results[randomIndex].urls.full + ")";
      } else {
        throw new Error("Invalid image data received.");
      }
    } catch (error) {
      console.error("Error occurred while fetching image:", error);
    }
  }

  return { getImage };
})();

export default cityAPI;
