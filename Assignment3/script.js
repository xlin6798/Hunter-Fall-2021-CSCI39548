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
}

function fill() {
    alert("Clicked Fill All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}