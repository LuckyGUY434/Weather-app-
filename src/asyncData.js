export async function asynchData(inputData = 'belgrade'){
    const cityName = document.getElementById('cityName')
    const currentTime = document.getElementById('currentTime')
    const weatherImg = document.getElementById('weatherImg')
    const weatherCelsius = document.getElementById('weather-celsius')
    const weatherStatus = document.getElementById('weather-status')

    const humidity = document.getElementById('humidity')
    const feelsLike = document.getElementById('feels-like')
    const pressure = document.getElementById('pressure')
    const windDirection = document.getElementById('wind-direction')
    
    
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d8ba6122d84a4838a8c183020240201&q=${inputData}`,{mode: 'cors'})
        const data = await response.json()
        cityName.innerText = `${data.location.name}, ${data.location.country}`
        currentTime.innerText = data.location.localtime

        weatherImg.src = data.current.condition.icon
        weatherCelsius.innerText = `${data.current.temp_c} °C`

        weatherStatus.innerText = data.current.condition.text

        humidity.innerText = `Wind speed: ${data.current.wind_kph}kph`
        feelsLike.innerText = `Feels like: ${data.current.feelslike_c}°C`
        pressure.innerText = `Current pressure: ${data.current.pressure_mb}mb`
        windDirection.innerText = `Wind direction: ${data.current.wind_dir}`
        
    }catch(error){
        console.error('Error fetching data:', error);
    }
}