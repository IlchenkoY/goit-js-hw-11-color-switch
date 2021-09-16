const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startActionButton = document.querySelector('[data-action="start"]');
const stopActionButton = document.querySelector('[data-action="stop"]');
let timerId = null;

startActionButton.addEventListener('click', startColorChanger)
stopActionButton.addEventListener('click', stopColorChanger)

function startColorChanger() {
  timerId = setInterval(() => {
    console.log(startActionButton)
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startActionButton.disabled = true;
}

function stopColorChanger() {
  clearInterval(timerId);
  startActionButton.disabled = false;
}