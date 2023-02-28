// https://api.adviceslip.com/advice

let adviceText = document.querySelector(".advice__text");
let adviceId = document.querySelector("#advice__id");
const button = document.querySelector(".button");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();

    const { id, advice } = data.slip;

    console.log(advice, id);

    adviceText.textContent = advice;
    adviceId.textContent = "#" + id;
  } catch (e) {
    console.log(e);
  }
}

// button.addEventListener("click", getAdvice);

//classwork
setInterval(getAdvice, 3000);
