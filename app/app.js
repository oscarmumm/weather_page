const apiKey = "1e0852abb42466a00a4d6d999c3e2b64";

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
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

