const divPalo = document.querySelectorAll(".palo");
const divNumber = document.querySelector(".number");
const button = document.querySelector("#button");

generator();
button.addEventListener("click", generator);

function generator() {
  const palo = Math.floor(Math.random() * 4 + 1);
  const number = Math.floor(Math.random() * 13 + 1);

  switch (palo) {
    case 1:
      divPalo.forEach((div) => {
        div.innerHTML = "♦";
        div.classList.add("red");
      });
      break;
    case 2:
      divPalo.forEach((div) => {
        div.innerHTML = "♥";
        div.classList.add("red");
      });
      break;
    case 3:
      divPalo.forEach((div) => {
        div.innerHTML = "♠";
        div.classList.remove("red");
      });
      break;
    case 4:
      divPalo.forEach((div) => {
        div.innerHTML = "♣";
        div.classList.remove("red");
      });
      break;
  }

  switch (number) {
    case 1:
      divNumber.innerHTML = "A";
      break;
    case 11:
      divNumber.innerHTML = "J";
      break;
    case 12:
      divNumber.innerHTML = "Q";
      break;
    case 13:
      divNumber.innerHTML = "K";
      break;
    default:
      divNumber.innerHTML = number;
  }
}

