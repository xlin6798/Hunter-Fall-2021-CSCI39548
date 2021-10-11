let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    let row = grid.insertRow(grid.rows.length);
    for (let i = 0; i < numCols; i++) {
        let cell = row.insertCell(i);
        cell.onclick = selected;
    }
    numRows++;
}
//Add a column
function addC() {
    for (let i = 0; i < numRows; i++) {
        let cell = grid.rows[i].insertCell(numCols);
        cell.onclick = selected;
    }
    numCols++;
}

//Remove a row
function removeR() {
    if (numRows > 0) {
        grid.deleteRow(numRows - 1);
        numRows--;
    }
}
//Remove a column
function removeC() {
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(numCols - 1);
        }
        numCols--;
    }
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
    this.style.backgroundColor = colorSelected;
}

function fill() {
    colorSelected = document.getElementById("selectedID").value;
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            grid.rows[r].cells[c].style.backgroundColor = colorSelected;
        }
    }
}

function clearAll() {
    while (numRows > 0) {
        console.log(numRows);
        removeR();
    }
    numCols = 0;
}

function fillU() {
    colorSelected = document.getElementById("selectedID").value;
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            let cell = grid.rows[r].cells[c];
            if (cell.style.backgroundColor == "")
                cell.style.backgroundColor = colorSelected;
        }
    }
}