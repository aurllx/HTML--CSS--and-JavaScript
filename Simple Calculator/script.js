const input1 = document.getElementById("input1"),
  input2 = document.getElementById("input2"),
  operators = document.querySelectorAll(".operator"),
  calculateBtn = document.getElementById("calculateBtn"),
  clearBtn = document.getElementById("clearBtn"),
  result = document.getElementById("result"),
  operatorText = document.getElementById("operatorText");

// Menambahkan class "active" pada button yang diklik
operators.forEach((button) => {
  button.addEventListener("click", () => {
    // Menghapus class "active" dari semua button operator
    operators.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});

// Menambahkan event listener pada tombol "Hitung" untuk menangani tombol "Enter"
calculateBtn.addEventListener("click", calculateResult);

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    calculateResult();
  }
});

// Menambahkan event listener pada tombol "Clear"
clearBtn.addEventListener("click", clearInput);

// Menambahkan event listener pada setiap tombol operator
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    const selectedOperator = this.getAttribute("data-operator");
    input2.value = selectedOperator;
    operatorText.textContent = selectedOperator;
  });
});

// alert
function showAlert(message) {
  const alertBox = document.getElementById("alertBox");
  alertBox.innerText = message;
  alertBox.style.display = "block";

  setTimeout(() => {
    hideAlert();
  }, 3000);
}
// fungsi hide alert
function hideAlert() {
  const alertBox = document.getElementById("alertBox");
  alertBox.style.display = "none";
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value.slice(1));

  let calculatedResult;

  if (isNaN(num1) || isNaN(num2)) {
    showAlert("Masukkan angka yang valid!");
  } else {
    const operator = input2.value.charAt(0);

    switch (operator) {
      case "+":
        calculatedResult = num1 + num2;
        break;
      case "-":
        calculatedResult = num1 - num2;
        break;
      case "*":
        calculatedResult = num1 * num2;
        break;
      case "/":
        calculatedResult = num1 / num2;
        break;
      default:
        showAlert("Operator tidak valid");
        break;
    }
  }

  result.value = calculatedResult;
}

// // Fungsi untuk menghapus input
// function clearInput() {
//   input1.value = "";
//   input2.value = "";
//   result.value = "";
//   operatorText.textContent = "";
// }

// reload page  for clear all
function clearInput() {
  location.reload();
}
