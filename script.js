const apiKey = "c160d7f84ad08dbf547b917f917278b6";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            document.getElementById("weatherResult").innerHTML =
                "City not found!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        console.log(error);
        document.getElementById("weatherResult").innerHTML =
            "Error fetching data";
    }
}
