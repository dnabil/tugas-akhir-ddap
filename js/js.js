const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

var nav = document.querySelector("nav");
var ushioLogo = document.querySelector("nav .ushio-logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    nav.classList.add("bg-light", "shadow");
    ushioLogo.classList.remove("hide");
  } else {
    nav.classList.remove("bg-light", "shadow");
    ushioLogo.classList.add("hide");
  }
});

const reservToastTrigger = document.getElementById("reservationBtn");
const reserv = document.getElementById("reservationToast");
if (reservToastTrigger) {
  reservToastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(reserv);

    toast.show();
  });
}
const aboutToastTrigger = document.getElementById("aboutBtn");
const about = document.getElementById("aboutToast");
if (aboutToastTrigger) {
  aboutToastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(about);

    toast.show();
  });
}
