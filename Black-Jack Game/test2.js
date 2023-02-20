let first = document.getElementById("input_first");
let second = document.getElementById("input_second");
let answer = document.getElementById("answer");

let element1 = 8;
let element2 = 2;

first.textContent = element1;
second.textContent = element2;

function sum() {
  let result = element1 + element2;
  answer.textContent = result;
}
function sub() {
  let result = element1 - element2;
  document.getElementById("answer").textContent = result;
}

function mul() {
  let result = element1 * element2;
  document.getElementById("answer").textContent = result;
}

function div() {
  let result = element1 / element2;
  document.getElementById("answer").textContent = result;
}
