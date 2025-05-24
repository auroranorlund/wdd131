const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©<span>${today.getFullYear()}</span>`;
let lastModif = document.querySelector('#lastModified');
lastModif.innerHTML = `${new Date(document.lastModified)}`;

let temperature = document.querySelector('#temperature');
let conditions = document.querySelector('#conditions');
let windSpeed = document.querySelector('#wind');
let windChill = document.querySelector('#chill')

function calculateWindChill(temp, wind) {
    if ((temp <= 10) && (wind >= 4.8)) {
        return (13.12 + ((0.6215 * temp) - (11.37 * (wind**0.16)) + (0.3965 * temp * (wind**0.16)))).toFixed(1);
    }
    else {
        return "N/A";
    }
}

temperature.innerHTML = `9`;
conditions.innerHTML = `Lightly Rainy`;
windSpeed.innerHTML = `56`
windChill.innerHTML = `${calculateWindChill(9, 56)}`
