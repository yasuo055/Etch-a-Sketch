const container = document.querySelector("#container");

// let randomColor = function() {
//     let hex = '0123456789ABCDEF';
//     let color = '#';
//     for(let i = 0; i < 6 ; i++){
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

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

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }
  hoverColor();
}

//function that changes div color uponed being hovered
function hoverColor() {
  let items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `${rainbowColor()}`;
    });
  });
}

makeRows(16, 16);
