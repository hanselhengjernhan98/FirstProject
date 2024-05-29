import { getInputDirection } from "./playingInput.js";
export const SNAKE_SPEED = 1;

const snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 12 },
];

export function update() {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

//puts in on the gameboard
export function draw(gameBoard) {
  snakeBody.forEach((abc) => {
    const snakeElement = document.createElement("div");
    // snakeElement.style.gridRowStart = abc.y;
    // snakeElement.style.gridColStart = abc.x;
    // snakeElement.classList.add("snake");
    // gameBoard.appendChild(snakeElement);
  });
}
