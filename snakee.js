import { getInputDirection } from "./inputt.js";
export const SNAKE_SPEED = 1;
const snakeBody = [{ x: 10, y: 11 }];

export function update() {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((i) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = i.y;
    snakeElement.style.gridColStart = i.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
