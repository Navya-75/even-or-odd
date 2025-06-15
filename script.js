function checkEvenOdd() {
  const input = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter a number.";
    return;
  }

  const number = parseInt(input);

  if (isNaN(number)) {
    result.textContent = "That's not a valid number!";
    return;
  }

  if (number % 2 === 0) {
    result.textContent = number + " is an Even number.";
  } else {
    result.textContent = number + " is an Odd number.";
  }
}
