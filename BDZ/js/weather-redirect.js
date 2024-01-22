let form=document.querySelector(`#train-submission-form`);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let city = document.querySelector(`#depart-from-city`).value;
    console.log(city);
    window.location.href = `/plan-journey.html?city=${city}`;
});