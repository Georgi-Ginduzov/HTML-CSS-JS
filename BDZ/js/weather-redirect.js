let form = document.querySelector(`#train-submission-form`);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let city = document.querySelector(`#depart-from-city`).value;
    window.location.href = `http://127.0.0.1:5501/plan-jorney.html?city=${city}`;
});