"use strict";

const vatAdd = document.querySelector("#vat-add");
const vatDeduct = document.querySelector("#vat-deduct");
const vatRateNineteen = document.querySelector("#vat-rate-nineteen");
const vatRateSeven = document.querySelector("#vat-rate-seven");
const netGrossAmountInput = document.querySelector("#net-gross-amount-input");
const netGrossAmountOutput = document.querySelector(".net-gross-amount-output");
const netGrossAmountOutputHeadline = document.querySelector(
  ".net-gross-amount-output-headline"
);
const netGrossAmountInputHeadline = document.querySelector(
  ".net-gross-amount-input-headline"
);
const btnCalculate = document.querySelector(".btn-calculate");
const netAmountOutput = document.querySelector(".net-amount-output");

console.log(vatRateNineteen);
console.log(vatRateSeven);
const vatAddCalculate = () => {
  if (vatRateNineteen.checked) {
    netAmountOutput.textContent =
      (Number(netGrossAmountInput.value) * 0.19).toFixed(2) + " €";
    netGrossAmountOutput.textContent =
      (Number(netGrossAmountInput.value) * 1.19).toFixed(2) + " €";
  } else if (vatRateSeven.checked) {
    netAmountOutput.textContent =
      (Number(netGrossAmountInput.value) * 0.07).toFixed(2) + " €";
    netGrossAmountOutput.textContent =
      (Number(netGrossAmountInput.value) * 1.07).toFixed(2) + " €";
  }
};

const vatDaductCalculate = () => {
  if (vatRateNineteen.checked) {
    netAmountOutput.textContent =
      ((Number(netGrossAmountInput.value) / 1.19) * 0.19).toFixed(2) + " €";
    netGrossAmountOutput.textContent =
      (Number(netGrossAmountInput.value) / 1.19).toFixed(2) + " €";
  } else if (vatRateSeven.checked) {
    netAmountOutput.textContent =
      ((Number(netGrossAmountInput.value) / 1.07) * 0.07).toFixed(2) + " €";
    netGrossAmountOutput.textContent =
      (Number(netGrossAmountInput.value) / 1.07).toFixed(2) + " €";
  }
};

btnCalculate.addEventListener("click", () => {
  event.preventDefault();
  if (vatAdd.checked) {
    vatAddCalculate();
  } else if (vatDeduct.checked) {
    vatDaductCalculate();
  }
});

vatDeduct.addEventListener("click", () => {
  console.log(netGrossAmountInputHeadline);
  netGrossAmountInputHeadline.innerHTML =
    "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span style='color: red'>*</span>";
  netGrossAmountOutputHeadline.textContent = "Nettobetrag";
});

vatAdd.addEventListener("click", () => {
  console.log(netGrossAmountInputHeadline);
  netGrossAmountInputHeadline.innerHTML =
    "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span style='color: red'>*</span>";
  netGrossAmountOutputHeadline.textContent = "Bruttobetrag (Endpreis)";
});
