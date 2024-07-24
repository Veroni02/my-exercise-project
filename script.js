function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityValue = searchInputElement.value;

  let apiKey = "a23a5ab0t0ce0fbdaab943206coccdb5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=${apiKey}`;
  axios.get(apiUrl).then((response) => {
    let city = response.data.city;
    let cityElement = document.querySelector("#current-city");
    let temperature = Math.round(response.data.temperature.current);
    let temperatureValue = document.querySelector(".current-temperature-value");
    cityElement.innerHTML = city;
    temperatureValue.innerHTML = temperature;
  });
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
