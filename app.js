const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const checkbox1 = document.querySelector("input[name=checkbox1]");
const checkbox2 = document.querySelector("input[name=checkbox2]");

checkbox1.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("chechbox", "true");
  } else {
    alert("Neapstiprinot datu apstrādi, mēs nevarēsim ar jums sazināties!");
  }
});

checkbox2.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("chechbox", "true");
  } else {
    alert("Neapstiprinot datu apstrādi, mēs nevarēsim ar jums sazināties!");
  }
});

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
