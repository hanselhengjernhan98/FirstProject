const inputDirection = { x: 0, y: 0 };
const lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  if (e.key === "W") {
    inputDirection = { x: 0, y: -1 };
  } else if (e.key === "S") {
    inputDirection = { x: 0, y: 1 };
  } else if (e.key === "A") {
    inputDirection = { x: -1, y: 0 };
  } else if (e.key === "D") {
    inputDirection = { x: 1, y: 0 };
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
