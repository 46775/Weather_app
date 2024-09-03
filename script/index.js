const searchBtn = document.getElementById('search');
const valueText = document.getElementById('inputText');
const cityName = document.getElementById('city-name');
const tempInC = document.getElementById('tempInCelcius');


async function searchResults(value) {
    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=24ef2d17e7384a4d99c64256242408&q=${value}&aqi=yes`);
    return result.json();
}

searchBtn.addEventListener('click', async () => {
    const inputvalue = valueText.value;
    const result = await searchResults(inputvalue);

    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    tempInC.innerText =  `${result.current.temp_c}`;
    document.getElementById('humidValue').innerText = `${result.current.humidity}%`
    document.getElementById('windSpeed').innerText = `${result.current.wind_kph}kph`
})