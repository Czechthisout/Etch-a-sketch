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
      })
    } else {
      console.log('slider not found');
    }
  });
  