function updateTime(){
let currentDate = new Date();
let date = currentDate.toLocaleDateString();
let time = currentDate.toLocaleTimeString();

document.getElementById('date').innerHTML = date;
document.getElementById('time').innerHTML = time;
};

setInterval(updateTime, 1000);