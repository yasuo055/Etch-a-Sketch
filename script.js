const container = document.querySelector("#container");
let gridSize;

let rainbowColor = function () {
  const Colors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
  ];

  let generatedColor = Math.floor(Math.random() * 7);
  return Colors[generatedColor];
};

// Function that changes div color upon being hovered
function hoverColor() {
  let items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `${rainbowColor()}`;
    });
  });
}

function getGridSize() {
  gridSize = parseInt(
    prompt("Enter the size of the grid (e.g., 16 for 16x16):", "")
  );
  if (!gridSize || gridSize <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  container.textContent = ""; // Clear the existing grid
  checkedLimit();
}

function setUpGrid() {
  const cellSize = parseFloat(520 / gridSize).toFixed(1);
  console.log(cellSize);
  container.style.setProperty("--grid-cols", gridSize);
  container.style.setProperty("--grid-rows", gridSize);
  for (let c = 0; c < gridSize * gridSize; c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    container.appendChild(cell);
  }
  hoverColor();
}

function clearGrid() {
  container.textContent = ""; // Clear the existing grid
  setUpGrid();
}

function checkedLimit() {
  if (gridSize <= 64) {
    setUpGrid();
  } else {
    alert("The limit is 64x64");
  }
}
