const weatherIcon = document.querySelector ('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.windSpeed')
const weatherError = document.querySelector('.weather-error')

async function getWeather() {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=a9a2098559fe514315bb4f612f6d6ab7&units=metric`
    const res = await fetch(url)
    const data = await res.json ();
    if(data.cod=='404'|| data.cod=='400'){
    weatherError.textContent = `${city.value} не найден`
    weatherIcon.className= 'weather-icon owf'
    weatherIcon.classList.add(null)
    temperature.textContent = null
    weatherDescription.textContent = null
    windSpeed.textContent = null
    humidity.textContent = null
    }
    else {
    weatherError.textContent = null;
    weatherIcon.className= 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`
    humidity.textContent= `Влажность:${Math.floor(data.main.humidity)}%`
    }
}

async function getWeather1() {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=a9a2098559fe514315bb4f612f6d6ab7&units=metric`
    const res = await fetch(url)
    const data = await res.json ();
    if(data.cod=='404' || data.cod == '400'){
    weatherError.textContent = `${city.value} is not found`
    weatherIcon.className= 'weather-icon owf'
    weatherIcon.classList.add(null)
    temperature.textContent = null
    weatherDescription.textContent = null
    windSpeed.textContent = null
    humidity.textContent = null
    }
    else {
    weatherError.textContent = null;
    weatherIcon.className= 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`
    humidity.textContent= `Humidity:${Math.floor(data.main.humidity)}%`
    }
}


const city = document.querySelector('.city')
city.addEventListener('change', (e)=>{
    if (leng.value == 'ru'){
          getWeather();  
    }
    else if (leng.value=='en') {
    getWeather1()
    }

})


document.addEventListener('DOMContentLoaded', ()=>{
    if (leng.value == 'ru'){
        getWeather();  
    }
    else if (leng.value=='en') {
        getWeather1()
    } 
});

