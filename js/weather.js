const city = document.querySelector("#weather span:nth-child(1)");
const weather = document.querySelector("#weather span:nth-child(2)");
const tempReal = document.querySelector("#weather span:nth-child(3)");
const tempFeel = document.querySelector("#weather span:nth-child(4)");
const info = document.querySelector("#weather span:nth-child(5)");

city.innerText = "도시 : ${citySaved}";
weather.innerText = "날씨 : ${weatherSaved}";
tempReal.innerText = "온도 : ${tempRealSaved}도";
tempFeel.innerText = "체감 : ${tempFeelSaved}도";
info.innerText = "실제로는 weather api 사용";
