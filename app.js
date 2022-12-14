

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3fe2c37c4amsh1b815e62a2c1c1cp1b3123jsn20790819f96b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.inner_html= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        temp.inner_html = response.temp
        temp2.inner_html = response.temp
        feels_like.inner_html = response.feels_like
        feels_like1.inner_html = response.feels_like
        humidity.inner_html = response.humidity 
        min_temp.inner_html = response.min_temp
        max_temp.inner_html = response.max_temp
        wind_speed.inner_html = response.wind_speed
        wind_speed1.inner_html = response.wind_speed
        wind_degrees.inner_html = response.wind_degrees 
        sunrise.inner_html = response.sunrise
        sunset.inner_html = response.sunset
  
    })
    .catch (err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("vadodara")