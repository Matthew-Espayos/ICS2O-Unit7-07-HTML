// Creating variables
let num1 = 0
let num2 = 0
let counter = 0
let answer = 0
// Adding a function to the button
document.getElementById('mybutton').addEventListener('click', calculate)
// Calculate
function calculate () {
  num1 = document.getElementById('myinput').value
  num2 = document.getElementById('myinput2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  // Adding a loop
  for (counter = 0; counter < num1; counter++) {
    answer = answer + num2
  }
  // Display answer
  document.getElementById('myanswer').innerHTML = answer
  // Reset the calculator
  document.getElementById('myreset').addEventListener('click', reset)
  function reset () {
    location.href = 'https://ics2o-unit7-07-html.matthewespayos.repl.co/'
  }
}
