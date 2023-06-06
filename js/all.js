// import bootstrap from "./bootstrap.js";
// import popper from "./popper.min.js";

const btnShip = document.querySelector("#checkout-form-btn-ship");

const btnPayment = document.querySelector("#checkout-form-btn-payment");

const btnIcloud = document.querySelector("#checkout-btn-invoice-icloud");
const btnPaper = document.querySelector("#checkout-btn-invoice-paper");
const formIcloud = document.querySelector(".checkout-invoice-icloud");
const formPaper = document.querySelector(".checkout-invoice-paper");
const toggleInvoice = document.querySelector(".toggle-invoice");

function invoiceType() {
  const isIcloud = btnIcloud.classList.contains("active");

  // btnIcloud.classList("active", isIcloud);
  // formIcloud.classList("d-flex", isIcloud);

  // if (isIcloud) {
  //   form;
  // }

  toggleInvoice.addEventListener("click", (e) => {
    const btnId = e.target.getElementById;
    const btnClass = e.target.classList;
    console.log("ddd");
    console.log(btnId);

    if (btnClass.contains("")) {
      return;
    } else {
    }
  });
}

invoiceType();

// 1. 判斷目前哪一個 active
// 2. 點擊事件：點中的秀 form
