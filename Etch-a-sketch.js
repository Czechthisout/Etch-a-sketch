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

create
  