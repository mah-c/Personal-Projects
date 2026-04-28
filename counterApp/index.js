let count = 0;
let counterNumber = document.getElementById("counter-number");

function increment() {
  count++;
  counterNumber.textContent = count;
}
function decrement() {
  if (count > 0) {
    count--;
    counterNumber.textContent = count;
  } else {
    alert("Cannot go below 0!");
  }
}
function reset() {
  count = 0;
  counterNumber.textContent = count;
}
