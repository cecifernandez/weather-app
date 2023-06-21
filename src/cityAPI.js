const cityAPI = (() => {
  const img = document.querySelector("img");

  async function getImage(query) {
    return await fetch(
      "https://api.unsplash.com/search/photos?query=" +
        query +
        "&client_id=-IshjZJzwRwoK5HToCA8cp_K9COyXK25Fhqa-Fh82tg",
      { mode: "cors" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          img.src = data.results[i].urls.full;
        }
      });
  }

  return { getImage };
})();

export default cityAPI;
