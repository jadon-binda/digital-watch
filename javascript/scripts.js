const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const btnStopWatch = document.querySelector('.stop-watch');
const btnStartWatch = document.querySelector('.start-watch');
let watch;

function updateWatch(hours, minutes, seconds) {
  const now = new Date();
  hours.textContent = now.getHours().toString().padStart(2, '0');
  minutes.textContent = now.getMinutes().toString().padStart(2, '0');
  seconds.textContent = now.getSeconds().toString().padStart(2, '0');
}

function startWatch() {
  watch = setInterval(() => updateWatch(hoursEl, minutesEl, secondsEl), 1000);
}

function stopWatch() {
  clearInterval(watch);
}

btnStartWatch.addEventListener('click', () => startWatch());
btnStopWatch.addEventListener('click', () => stopWatch());