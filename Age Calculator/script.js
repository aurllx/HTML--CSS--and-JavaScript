document.title = "Calculator Age";

const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Set the maximum date to today's date
const result = document.getElementById("result");

/**
 * Calculates the age of the user based on their birth date
 */
function calculateAge() {
  const birthDate = new Date(userInput.value); // Get the user's birth date

  const d1 = birthDate.getDate();
  const m1 = birthDate.getMonth() + 1;
  const y1 = birthDate.getFullYear();

  const today = new Date(); // Get today's date

  const d2 = today.getDate();
  const m2 = today.getMonth() + 1;
  const y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1; // Calculate the number of years

  if (m2 >= m1) {
    m3 = m2 - m1; // Calculate the number of months
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1; // Calculate the number of days
  } else {
    m3--;
    d3 = getDaysInMonth(y2, m2) - (d1 - d2); // Adjust for the current month
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  result.innerHTML = `You are ${y3} years, ${m3} months old and ${d3} days old.`;
}

/**
 * Returns the number of days in a given month
 * @param {number} year - The year of the month
 * @param {number} month - The month
 * @returns {number} The number of days in the month
 */
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// for refresh or delete 
function refresh() {
  document.getElementById("date").value = "dd/mm/yyyy";
}
