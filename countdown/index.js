const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway=document.querySelector(".giveaway");
const deadLine=document.querySelector(".deadline");
const items=document.querySelectorAll(".deadline-format h4");
const futureDate=new Date(2022,5,18,11,30,0);

const day=weekdays[futureDate.getDay()];
const date=futureDate.getDate();
const month=months[futureDate.getMonth()];
const year=futureDate.getFullYear();
const hour=futureDate.getHours();
const minutes=futureDate.getMinutes();

giveaway.textContent=`giveaway ends on ${day} ${date} ${month} ${year} ${hour}:${minutes}am`