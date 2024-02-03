function refreshWeather(response) {
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "f085atc08a41dae309bfobb656f79131";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
