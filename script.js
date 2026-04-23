// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Search Disease
function searchDisease() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let text = cards[i].innerText.toLowerCase();
    cards[i].style.display = text.includes(input) ? "block" : "none";
  }
}

// BMI Calculator
function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100;
  let bmi = weight / (height * height);
  document.getElementById("result").innerText =
    "Your BMI is " + bmi.toFixed(2);
}

// Quiz
function checkQuiz() {
  let score = 0;
  if (document.getElementById("q1a").checked) score++;
  if (document.getElementById("q2b").checked) score++;

  document.getElementById("quizResult").innerText =
    "Your Score: " + score + "/2";
}
// Call Emergency Number
function callNumber(number) {
  window.location.href = "tel:" + number;
}

// Save Family Contact
function saveContact() {
  let name = document.getElementById("familyName").value;
  let number = document.getElementById("familyNumber").value;

  localStorage.setItem("familyName", name);
  localStorage.setItem("familyNumber", number);

  document.getElementById("savedContact").innerText =
    "Saved: " + name + " (" + number + ")";
}

// Call Saved Family Contact
function callFamily() {
  let number = localStorage.getItem("familyNumber");

  if (number) {
    window.location.href = "tel:" + number;
  } else {
    alert("No family contact saved!");
  }
}