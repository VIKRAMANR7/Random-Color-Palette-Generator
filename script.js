const refreshBtn = document.querySelector(".refreshBtn");
const colors = document.querySelectorAll(".wrapper div span");
const hexCodes = document.querySelectorAll(".wrapper div p");

function randomHexCodeGenerator() {
  const randomHex = ((Math.random() * 0xffffff) << 0)
    .toString(16)
    .padStart(6, "0");
  return `#${randomHex}`;
}

refreshBtn.addEventListener("click", function () {
  for (i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = randomHexCodeGenerator(colors);
    hexCodes[i].textContent = randomHexCodeGenerator(colors);
  }
});
