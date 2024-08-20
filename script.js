document.addEventListener("DOMContentLoaded", () => {
  const dataContainer = document.getElementById("dataContainer");
  const apiUrl = "https://dog.ceo/api/breeds/image/random"; // Dog CEO’s Dog API

  function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(`Failed to fetch data from ${url}:`, error);
      });
  }

  function displayData(data) {
    const card = document.createElement("div");
    card.className = "col-md-12";

    card.innerHTML = `
            <div class="card">
                <img src="${data.message}" class="card-img-top" alt="Random Dog">
            </div>
        `;

    dataContainer.appendChild(card);
  }

  fetchData(apiUrl).then((data) => {
    if (data) {
      displayData(data);
    }
  });
});
