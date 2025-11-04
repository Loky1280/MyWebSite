const burgerMenu = document.getElementById("BurgerMenu");
const centralBurgerLine = document.getElementsByClassName("CentralBurgerElement");

burgerMenu.addEventListener("change", () => {
  if (burgerMenu.checked) {
    centralBurgerLine[0].style.width = "100%";
  } else {
    centralBurgerLine[0].style.width = "70%";
  }
});