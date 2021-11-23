// Select color input
const colorChoice = document.getElementById('colorPicker');


// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');


// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let newGrid = document.getElementById('pixelCanvas')
  for (let y = 1; y <= height.value; y++) {
    const newRow = newGrid.insertRow();
    for (let x = 1; x <= width.value; x++) {
    const newColumn = newRow.insertCell();

    }
  }
};



// Your code goes here!

document.getElementById('sizePicker').addEventListener('submit', function(event){
  pixelCanvas.innerHTML = "";
  console.log("Is this working?");
  event.preventDefault();
  makeGrid();
  changeColor();
});


function changeColor(){
  const pixels = document.querySelectorAll('td');
  for (let z = 0; z <= pixels.length; z++) {
    pixels[z].addEventListener('click', function(event){
      event.target.style.backgroundColor = colorChoice.value;
    });
  };
};
