const form = document.getElementById("interestForm");
const result = document.getElementById("result");
const interestOutput = document.getElementById("interest");
const totalOutput = document.getElementById("total");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  if (principal <= 0 || rate < 0 || time <= 0) {
    alert("Enter a principal amount and time greater than zero, and a non-negative interest rate.");
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  interestOutput.textContent = interest.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });

  totalOutput.textContent = total.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });

  result.hidden = false;
});

form.addEventListener("reset", function () {
  result.hidden = true;
});
