import { getInputDirection } from "./inputt.js";

export const SNAKE_SPEED = 1;

const snakeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  console.log(inputDirection.x, inputDirection.y);
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((i) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = i.y;
    snakeElement.style.gridColumnStart = i.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake() {
  newSegments += amount;
}

export function onSnake(position) {
  return snakeBody.some((segment) => {
    return equalPositions(segment, position);
  });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  let newSegments = 0;
}
