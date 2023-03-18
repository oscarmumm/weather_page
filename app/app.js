const apiKey = "1e0852abb42466a00a4d6d999c3e2b64";
const d = document;
const mainContainer = d.getElementById("main-container");


// SCREENS
const loadingScreen = d.getElementById('loading-screen'); 
const currentWeather = d.getElementById("current-weather-section");
const forecast = d.getElementById('forecast-section');
const footer = d.getElementById('footer');

// CURRENT WEATHER CONSTS
const cityName = d.getElementById("city-name");
const weatherIcon = d.getElementById("weather-icon");
const temperature = d.getElementById("temperature");
const feelsLike = d.getElementById("feels-like");
const condition = d.getElementById("condition");
const humidity = d.getElementById("humidity");
const pressure = d.getElementById("pressure");
const visibility = d.getElementById("visibility");
const wind = d.getElementById("wind");

// WEATHER FORECAST CONSTS
const forecastIcon1 = d.getElementById('forecast-icon1');
const forecastTemp1 = d.getElementById('forecast-temp1');
const forecastTime1 = d.getElementById('forecast-time1');
const forecastIcon2 = d.getElementById('forecast-icon2');
const forecastTemp2 = d.getElementById('forecast-temp2');
const forecastTime2 = d.getElementById('forecast-time2');
const forecastIcon3 = d.getElementById('forecast-icon3');
const forecastTemp3 = d.getElementById('forecast-temp3');
const forecastTime3 = d.getElementById('forecast-time3');
const forecastIcon4 = d.getElementById('forecast-icon4');
const forecastTemp4 = d.getElementById('forecast-temp4');
const forecastTime4 = d.getElementById('forecast-time4');
const forecastIcon5 = d.getElementById('forecast-icon5');
const forecastTemp5 = d.getElementById('forecast-temp5');
const forecastTime5 = d.getElementById('forecast-time5');


// Obtaining user location
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
  .then((data) => showCurrentWeather(data));
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric&lang=es`)
  .then((response) => response.json())
  .then((data) => showForecast(data));
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

const showCurrentWeather = (data) => {
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
  loadingScreen.style.display = 'none';
  currentWeather.style.display = 'block';
};

const showForecast = (data) => {
  forecastTime1.innerText = `${data.list[0].dt_txt.slice(11, 16)}`;
  forecastTemp1.innerText = `${Math.round(data.list[0].main.temp)}°C`;
  forecastIcon1.src = `./icons/${data.list[0].weather[0].icon}.svg`;
  forecastTime2.innerText = `${data.list[1].dt_txt.slice(11, 16)}`;
  forecastTemp2.innerText = `${Math.round(data.list[1].main.temp)}°C`;
  forecastIcon2.src = `./icons/${data.list[1].weather[0].icon}.svg`;
  forecastTime3.innerText = `${data.list[2].dt_txt.slice(11, 16)}`;
  forecastTemp3.innerText = `${Math.round(data.list[2].main.temp)}°C`;
  forecastIcon3.src = `./icons/${data.list[2].weather[0].icon}.svg`;
  forecastTime4.innerText = `${data.list[3].dt_txt.slice(11, 16)}`;
  forecastTemp4.innerText = `${Math.round(data.list[3].main.temp)}°C`;
  forecastIcon4.src = `./icons/${data.list[3].weather[0].icon}.svg`;
  forecastTime5.innerText = `${data.list[4].dt_txt.slice(11, 16)}`;
  forecastTemp5.innerText = `${Math.round(data.list[4].main.temp)}°C`;
  forecastIcon5.src = `./icons/${data.list[4].weather[0].icon}.svg`;
  forecast.style.display = 'block';
  footer.style.display = 'block';
};