const main = document.querySelector("#container");



function makeRows(rows, cols) {
  main.style.setProperty("--grid-rows", rows);
  main.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    main.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);
