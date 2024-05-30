let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    if (lastInputDirection.y !== 0) return;
    inputDirection = { x: 0, y: -1 };
  } else if (e.key === "ArrowDown") {
    if (lastInputDirection.y !== 0) return;
    inputDirection = { x: 0, y: 1 };
  } else if (e.key === "ArrowLeft") {
    if (lastInputDirection.x !== 0) return;
    inputDirection = { x: -1, y: 0 };
  } else if (e.key === "ArrowRight") {
    if (lastInputDirection.x !== 0) return;
    inputDirection = { x: 1, y: 0 };
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
