const colors = ["1a237e", "black", "#0091ea", "#4a148c", "#006064", "#263238"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
