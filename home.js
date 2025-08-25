// toggle future
document.getElementById("money-btn").addEventListener("click", function () {
  const addMoneyForm = document.getElementById("add-mony-form");
  const cashoutFrom = document.getElementById("cashout-from");
  addMoneyForm.classList.remove("hidden");
  addMoneyForm.classList.add("block");
  cashoutFrom.classList.add("hidden");
});
document.getElementById("cashout-btn").addEventListener("click", function () {
  const addMoneyForm = document.getElementById("add-mony-form");
  const cashoutFrom = document.getElementById("cashout-from");
  cashoutFrom.classList.remove('hidden')
  cashoutFrom.classList.add('block')
  addMoneyForm.classList.add("hidden");
});

//  add money fetare add
const addMneyBtn = document
  .getElementById("add-money-btn")
  .addEventListener("click", function () {
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const accNumber = parseInt(document.getElementById("acc-number").value);

    if (accNumber === 1316493226 && pinNumber === 1234) {
      const balance = parseInt(document.getElementById("balance").innerText);
      const amount = parseInt(document.getElementById("Amount").value);
      const newBlance = balance + amount;
      document.getElementById("balance").innerText = newBlance;
    } else {
      alert("number or pin");
    }
  });

//   cashout future add
