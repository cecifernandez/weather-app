const cityAPI = (() => {
  const img = document.getElementById("image");

  async function getImage(query) {
    try {
      const response = await fetch(
        "https://api.unsplash.com/search/photos?query=" +
          query +
          "&client_id=-IshjZJzwRwoK5HToCA8cp_K9COyXK25Fhqa-Fh82tg",
        { mode: "cors" }
      );

      if (!response.ok) {
        throw new Error("Unable to fetch image data.");
      }

      const data = await response.json();
      console.log(data);

      if (
        data.results &&
        data.results.length > 0 &&
        data.results[0].urls &&
        data.results[0].urls.full
      ) {
        img.style.background =
          "url(" + data["results"][0]["urls"]["regular"] + ")";
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
