import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snakee.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main); //calls the function to call it, this is asynchronous where other lines of code run at the same tmie
  const secondsSinceLastRender = currentTime - lastRenderTime / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // exits the function if it doesn't fulfil this, resets counter but that's what lastRenderTime is for.

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
