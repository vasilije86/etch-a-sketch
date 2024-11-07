let gridSize = 16;
const container = document.querySelector('#container');
const sizeButton = document.querySelector('#size');
const clearButton = document.querySelector('#clear');
function setSize (gridSize) {
    container.innerHTML = '';
    const cellSize = container.clientWidth /gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div  = document.createElement('div');
        div.style.cssText = `width : ${cellSize}px; height : ${cellSize}px;border:1px solid black`;
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    }
}
setSize(gridSize);
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('#container div')
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});
sizeButton.addEventListener('click', () =>{
    let newSize = parseInt(prompt("Enter a new grid size"));
    if (newSize && newSize > 0 && newSize <= 100) {
        setSize(newSize)
    } else {
        alert("Please enter a valid number between 1 and 100")
    }
});