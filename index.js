const container = document.querySelector('.container');
const resetButton = document.querySelector('.btn');
//create the grid 16x16

for (let i=0; i<256; i++){
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');



// create the hover effect
gridItem.addEventListener('mouseover', () => {
  gridItem.style.backgroundColor = 'lightgreen';
});

container.appendChild(gridItem);
}
  
resetButton.addEventListener('click', () => {
  window.location.reload();
});