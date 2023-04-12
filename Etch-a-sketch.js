createGrid(slider.value);

document.addEventListener('DOMContentLoaded', () => {
    const colorPallet = document.getElementById("colorPallet");
    const slider = document.getElementById("slider");
  
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
        createGrid(value);
        
      })
    } else {
      console.log('slider not found');
    }
  });


function createGrid(size) {
    var grid=document.getElementById('grid');

    // Remove all child elements from the grid to start fresh
    while (grid.firstChild){
      grid.removeChild(grid.firstChild);
    }
    // Set the new grid styles based on the size value
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

      
    // Create grid cells and append them to the grid
    for(var i=0;i<size*size;i++){
      const cell = document.createElement("div");
      grid.appendChild(cell)
      cell.classList.add("grid-cell");
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
  