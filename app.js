const EidAlAdhaDate = new Date("June 17, 2024 00:00:00").getTime();
const day = document.querySelector("#day span");
const hour = document.querySelector("#hour span");
const minute = document.querySelector("#minute span");
const second = document.querySelector("#second span");

setInterval(() => {
  const now = new Date().getTime();
  const distance = EidAlAdhaDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

day.innerHTML = days
hour.innerHTML = hours
minute.innerHTML = minutes
second.innerHTML = seconds

}, 1000);