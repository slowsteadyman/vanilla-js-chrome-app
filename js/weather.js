const city = document.querySelector("#weather span:nth-child(1)");
const weather = document.querySelector("#weather span:nth-child(2)");
const tempReal = document.querySelector("#weather span:nth-child(3)");
const tempFeel = document.querySelector("#weather span:nth-child(4)");
const API_KEY = key.apikey;
const CITY_KEY = "city";
const WEATHER_KEY = "weather";
const TEMPREAL_KEY = "tempReal";
const TEMPFEEL_KEY = "tempFeel";
const citySaved = localStorage.getItem(CITY_KEY);
const weatherSaved = localStorage.getItem(WEATHER_KEY);
const tempRealSaved = localStorage.getItem(TEMPREAL_KEY);
const tempFeelSaved = localStorage.getItem(TEMPFEEL_KEY);

if (citySaved && weatherSaved && tempRealSaved && tempFeelSaved) {
  city.innerText = `도시 : ${citySaved}`;
  weather.innerText = `날씨 : ${weatherSaved}`;
  tempReal.innerText = `온도 : ${tempRealSaved}도`;
  tempFeel.innerText = `체감 : ${tempFeelSaved}도`;
} else {
  navigator.geolocation.getCurrentPosition(geoSucc, geoFail);
}

function geoSucc(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=%API_KEY&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((item) => {
      city.innerText = `도시 : ${item.name}`;
      weather.innerText = `날씨 : ${item.weather[0].description}`;
      tempReal.innerText = `온도 : ${item.main.temp}도`;
      tempFeel.innerText = `체감 : ${item.main.feels_like}도`;
      saveWeather(item);
    });
}

function geoFail() {
  alert("위치 정보 제공을 허가해 주세요");
}

function saveWeather(item) {
  localStorage.setItem(CITY_KEY, item.name);
  localStorage.setItem(WEATHER_KEY, item.weather[0].description);
  localStorage.setItem(TEMPREAL_KEY, item.main.temp);
  localStorage.setItem(TEMPFEEL_KEY, item.main.feels_like);
}
