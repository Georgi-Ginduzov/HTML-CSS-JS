let form=document.querySelector(`#train-submission-form`);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let city = document.querySelector(`#depart-from-city`).value;
    console.log(city);
    window.location.href = `/plan-journey.html?city=${city}`;
});

let temp = document.querySelector('#temp');
let urlParams = new URLSearchParams(window.location.search);
let city = urlParams.get('city');
console.log(city);

const displayData =(weather)=>{
    let celsius = weather.current.temp_c;
    temp.innerText = `${celsius}°C`;
}
    
fetch(`http://api.weatherapi.com/v1/current.json?key=ace1109ee27d4f01a45185757242201&q=Sofia`)
.then(response => response.json())
.then(displayData)
.catch(err => alert(`Wrong ${city} name!`));
