const apiKey = "1e0852abb42466a00a4d6d999c3e2b64";
const d = document;
const currentWeather = d.getElementById("current-weather");
const mainContainer = d.getElementById("main-container");
const cityName = d.getElementById("city-name");
const weatherIcon = d.getElementById("weather-icon");
const temperature = d.getElementById("temperature");
const feelsLike = d.getElementById("feels-like");
const condition = d.getElementById("condition");
const humidity = d.getElementById("humidity");
const pressure = d.getElementById("pressure");
const visibility = d.getElementById("visibility");
const wind = d.getElementById("wind");


// Obteniendo la ubicación del usuario
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;
  console.log("location ready");
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric&lang=es`)
  .then((response) => response.json())
  .then((data) => showData(data));
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric&lang=es`)
  .then((response) => response.json())
  .then((data) => testingDate(data))
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

const showData = (data) => {
  mainContainer.style.background = `var(--${data.weather[0].icon})`
  cityName.innerText = data.name;
  weatherIcon.src = `./icons/${data.weather[0].icon}.svg`;
  temperature.innerText = `${Math.round(data.main.temp)}°C`;
  feelsLike.innerText = `ST: ${Math.round(data.main.feels_like)}°C`;
  condition.innerText = data.weather[0].description;
  humidity.innerText = `${data.main.humidity} %`;
  pressure.innerText = `${data.main.pressure} hpa`;
  visibility.innerText = `${(data.visibility) / 1000} km`;
  wind.innerText = `${Math.round((data.wind.speed) * 3.6)} km/h`;
};

const testingDate = (data) => {
  console.log(data.list[0])
  console.log(data.list[0].dt_txt)
}