const container = document.querySelector("#container");

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
  let gridSize = parseInt(
    prompt("Enter the size of the grid (e.g., 16 for 16x16):", "")
  );
  if (!gridSize || gridSize <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  
  container.innerHTML = ""; // Clear the existing grid
  container.style.setProperty("--grid-cols", gridSize);
  container.style.setProperty("--grid-rows", gridSize);

  const cellSize = parseFloat( 520 / gridSize).toFixed(1);
  console.log(cellSize);
  
  for (let c = 0; c < gridSize * gridSize; c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    //cell.style.border = '0px solid #ddd';
    container.appendChild(cell);
  }
  hoverColor();
}






getGridSize();
