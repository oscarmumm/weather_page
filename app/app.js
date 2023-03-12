const apiKey = "1e0852abb42466a00a4d6d999c3e2b64";
const d = document;
const currentWeather = d.getElementById("current-weather");
const cityName = d.getElementById("city-name");
const weatherIcon = d.getElementById("weather-icon");
const temperature = d.getElementById("temperature");
const feelsLike = d.getElementById("feels-like");
const condition = d.getElementById("condition");
const humidity = d.getElementById("humidity");
const pressure = d.getElementById("pressure");


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
  .then((data) => console.log(data));
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

const showData = (data) => {
  cityName.innerText = data.name;
  weatherIcon = 0;
}