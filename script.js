let currentDate = document.querySelector(".current"); 
let days = document.querySelector(".days"); 
let switchMonth = document.querySelectorAll(".icons i");
const Month = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth(); 
const renderCalendar = () => {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let firstDateOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    // console.log(lastDateOfMonth)
    // console.log(lastDateOfLastMonth)
    // console.log(firstDateOfMonth)
    // console.log(lastDayOfMonth)
    let li = "";
    for (let i = firstDateOfMonth; i > 0; i--) {
        li += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let currDay = i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear() ? "active" : "";
        li += `<li class="${currDay}">${i}</li>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
        li += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }
    currentDate.innerText = `${Month[currentMonth]} ${currentYear}`;
    days.innerHTML = li;
}
renderCalendar();
switchMonth.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "prev") {
            currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
        } else {
            currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
            currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
        }
        renderCalendar();
    });
});


//show time

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let am_pm = document.getElementById("day-night");

function getTime() {
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();

    hour.innerHTML = "0" + currentHour % 12 || 12; // Adjust to 12-hour format
    min.innerHTML = currentMinute < 10 ? "0" + currentMinute : currentMinute;
    sec.innerHTML = currentSecond < 10 ? "0" + currentSecond : currentSecond;

    if (currentHour >= 12) {
        am_pm.innerText = "PM";
    } else {
        am_pm.innerText = "AM";
    }
}
getTime()
setInterval(getTime, 1000);
setInterval(renderCalendar,  60*60*1000 );

