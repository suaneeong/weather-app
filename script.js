function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let city = searchInputElement.value;
  let apiKey = "f085atc08a41dae309bfobb656f79131";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
  let tempElement = document.querySelector(".weather-app-temp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
