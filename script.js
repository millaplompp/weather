const apiKey = '6d6920a683ac1628ced3bab35272c1d3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "weather-app-img/images/clouds.png"
    } 
    
    else if(data.weather[0].main == 'Clear') {
        weatherIcon.src = "weather-app-img/images/clear.png"
    }

    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "weather-app-img/images/mist.png"
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "weather-app-img/images/snow.png"
    }
    else if(data.weather[0].main == 'Wind'){
        weatherIcon.src = "weather-app-img/images/wind.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }

    document.querySelector('.weather').style.display = 'block'
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})

checkWeather();