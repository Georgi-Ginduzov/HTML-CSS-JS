document.addEventListener('DOMContentLoaded', (event) =>{
    let form=document.querySelector(`#train-submission-form`);  
    let temp = document.querySelector('#temp'); 

    // Function to fetch and display weather data
    const fetchWeather = (city) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=ace1109ee27d4f01a45185757242201&q=${city}`)
        .then(response => response.json())
        .then(weather => {
            let celsius = weather.current.temp_c;
            temp.innerText = `${celsius}°C`;
            let iconURL = weather.current.condition.icon;
            if (!iconURL.startsWith('https:')) {
                iconURL = 'https:' + iconURL;
            }
            let img = document.createElement('img');
            img.src = iconURL;
            temp.appendChild(img);
        })
        .catch(err => alert(`Wrong city name!`));
    };

    // Fetch weather data when the page loads
    let urlParams = new URLSearchParams(window.location.search);
    let city = urlParams.get('city');
    if (city) {
        fetchWeather(city);
    }

    // Fetch weather data when a city name is submitted in the form
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        city = document.querySelector(`#depart-from-city`).value;
        fetchWeather(city);
    });
});
