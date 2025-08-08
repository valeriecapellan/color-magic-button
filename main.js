const button = document.getElementById("theButton");

button.addEventListener("click", () => {
  button.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});

function randomColor() {
  return Math.floor(Math.random() * 256);
}

// en cada click necesito que me devuelva un color diferente
// un color es rgb(red, green, blue)
// y cada valor, es decir, cada color va desde 0 a 255

// definir una función que dé un número random
// utilizar esa función para cada valor (r, g & b)