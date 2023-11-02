
const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const rainbowMode = document.querySelector('.rainbowMode');
const eraserButton = document.querySelector('.eraser');
const slider = document.querySelector('.slider');
const rangeValue = document.querySelector('.rangeValue');
const normalMode = document.querySelector('.normalMode');
const fragment = document.createDocumentFragment();

const gridWidth = grid.clientWidth;

let size = 16;
let isEraser = false;
let isRainbowMode = false;

setupGrid(size);

function setupGrid(size){
    
    for(let i = 0; i < size * size; ++i){
        let cell = document.createElement('div');
        cell.style.width = cell.style.height = `${gridWidth/size}px`;
        cell.style.backgroundColor = 'white';
        fragment.appendChild(cell);
    }

    grid.appendChild(fragment);
}
