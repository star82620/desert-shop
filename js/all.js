// import bootstrap from "./bootstrap.js";
// import popper from "./popper.min.js";

const btnIcloud = document.querySelector("[data-toggle='invoice-icloud']");
const btnPaper = document.querySelector("[data-toggle='invoice-paper']");
const formIcloud = document.querySelector(".checkout-invoice-icloud");
const formPaper = document.querySelector(".checkout-invoice-paper");
const toggleInvoice = document.querySelector(".toggle-invoice");

function invoiceType() {
  toggleInvoice.addEventListener("click", (e) => {
    const btnId = e.target.dataset.toggle;
    // console.log("btnIcloud", btnIcloud);

    if (btnId === "invoice-icloud") {
      formIcloud.classList.add("active");
      btnIcloud.classList.add("active");
      formPaper.classList.remove("active");
      btnPaper.classList.remove("active");
    }

    if (btnId === "invoice-paper") {
      formIcloud.classList.remove("active");
      btnIcloud.classList.remove("active");
      formPaper.classList.add("active");
      btnPaper.classList.add("active");
    }
  });
}

invoiceType();

// 1. 判斷目前哪一個 active
// 2. 點擊事件：點中的秀 form

const btnShip = document.querySelector("#checkout-form-btn-ship");
const btnPayment = document.querySelector("#checkout-form-btn-payment");
const formBlocks = document.querySelector(".form-block-container-inside");

function toggleForm() {
  btnShip.addEventListener("click", (e) => {
    formBlocks.classList.add("form-toggle-payment");
  });
  btnPayment.addEventListener("click", (e) => {
    formBlocks.classList.add("form-toggle-invoice");
    console.log("yes");
  });
}

toggleForm();
