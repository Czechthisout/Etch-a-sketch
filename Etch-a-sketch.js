customColorButtonActive = false;
BWButtonActive = false;
rainbowButtonActive = false;
eraserButton = false;
clearButton = false;
let color = "black";
const colorPallet = document.getElementById("colorPallet");
const slider = document.getElementById("slider");

buttons = document.querySelectorAll('button')

colorPallet.addEventListener('change', () => {
  customColorButtonActive = true;
})

buttons.forEach(function(e) {
  e.addEventListener("click", function() {
    customColorButtonActive = false;
    BWButtonActive = false;
    rainbowButtonActive = false;
    eraserButton = false;
    clearButton = false;
    
    if (e.id === 'BWButton'){
      BWButtonActive = true;
    }
    else if (e.id === "rainbowButton"){
      rainbowButtonActive = true;
    }
    else if (e.id === "eraserButton"){
      eraserButton = true;
    }
    else if (e.id === "clearButton"){
      clearButton = true;
      createGrid(slider.value, 'white');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    if (colorPallet) {
      console.log('Selected color:', colorPallet.value);

      colorPallet.addEventListener('change', (event) => {
        console.log('New color is: ', event.target.value);
      });
    } else {
      console.log('colorPallet not found');
    }

    if (slider) {
      console.log('Selected size:', slider.value);

      slider.addEventListener('change', (event)=>{
        const value = event.target.value;
        console.log('New size is: ', event.target.value);
        document.getElementById("sizeValue").textContent = value+' X '+value;
        createGrid(value, "black");

      })
      createGrid(slider.value, "black");

    } else {
      console.log('slider not found');
    }
  });


function createGrid(size, color) {
    var grid=document.getElementById('grid');
    while (grid.firstChild){
      grid.removeChild(grid.firstChild);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let mouseActive = false;
    grid.addEventListener('mousedown', ()=>{
      mouseActive = true;
    })

    grid.addEventListener('mouseup', ()=>{
      mouseActive = false;
    })

    for(var i=0;i<size*size;i++){
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.addEventListener('mousemove', (event)=>{
        if (mouseActive){
          console.log('filling cell w/' + color);
          if (customColorButtonActive) {
            color = colorPallet.value;
          } else if (BWButtonActive) {
            color = "black";
          } else if (rainbowButtonActive) {
            color = "#" + Math.floor(Math.random()*16777215).toString(16);
          } else if (eraserButton) {
            color = "white";
          } 
          
          event.target.style.backgroundColor = color}});

      grid.appendChild(cell);
  }
}

tippy('#clearButton', {
  content: 'Press to clear your work',
  placement: 'right-end'
});

tippy('#colorPallet', {
  content: 'Sketch with a custom color',
  placement: 'right-end'
});

tippy('#BWButton', {
  content: 'Sketch like you did as a child - in black and white',
  placement: 'right-end'
});

tippy('#rainbowButton', {
  content: 'Sketch all the colors of the rainbow',
  placement: 'right-end'
});

tippy('#eraserButton', {
  content: 'Press to erase with precision',
  placement: 'right-end'
});

tippy('#slider', {
  content: 'Change the grid dimensions. This will clear your work',
  placement: 'right-end'
});

create
