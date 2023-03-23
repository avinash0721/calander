const monthName = document.querySelector(".date h1");

const fullDate = document.querySelector(".date p");

const datesEl = document.querySelector(".days");
const monthIndex = new Date().getMonth();

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();

const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
console.log(lastDay);
const months = [
  "January",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

monthName.innerText = months[monthIndex];
fullDate.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}
datesEl.innerHTML = days;
