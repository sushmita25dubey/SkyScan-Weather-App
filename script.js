
const API_KEY = "ca32983d2a2303dc1204d30afac1226c";


const searchBox = document.getElementById("searchBox");

const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");
const date = document.getElementById("date");


searchBox.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        getWeather(searchBox.value);

    }

});


getWeather("Delhi");



async function getWeather(cityName){

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

    try{

        const response = await fetch(url);

        if(!response.ok){

            alert("City not found!");

            return;

        }

        const data = await response.json();

        console.log(data);

        updateUI(data);

    }

    catch(error){

        console.log(error);

        alert("Something went wrong!");

    }

}




function updateUI(data){

    city.innerHTML =
        `${data.name}, ${data.sys.country}`;

    temperature.innerHTML =
        `${Math.round(data.main.temp)}°C`;

    condition.innerHTML =
        data.weather[0].main;

    humidity.innerHTML =
        `${data.main.humidity}%`;

    pressure.innerHTML =
        `${data.main.pressure} hPa`;

    feelsLike.innerHTML =
        `${Math.round(data.main.feels_like)}°C`;

    wind.innerHTML =
        `${data.wind.speed} km/h`;

    date.innerHTML =
        new Date().toDateString();

    changeIcon(data.weather[0].main);

    changeBackground(data.weather[0].main);

}



function changeIcon(weather){

    switch(weather){

        case "Clouds":

            weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/414/414825.png";

            break;

        case "Rain":

            weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/1163/1163624.png";

            break;

        case "Snow":

            weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/642/642102.png";

            break;

        case "Thunderstorm":

            weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/1146/1146860.png";

            break;

        case "Mist":

            weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/1197/1197102.png";

            break;

        default:

            weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/869/869869.png";

    }

}


function changeBackground(weather){

    switch(weather){

        case "Clouds":

            document.body.style.background =
"#1f2937";

            break;

        case "Rain":

            document.body.style.background =
"#23395d";

            break;

        case "Snow":

            document.body.style.background =
"#6b7280";

            break;

        case "Thunderstorm":

            document.body.style.background =
"#111827";

            break;

        case "Mist":

            document.body.style.background =
"#475569";

            break;

        default:

            document.body.style.background =
"#0b1220";

    }

}