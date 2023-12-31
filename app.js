
const grid = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset');
const rainbowMode = document.querySelector('.rainbowMode');
const eraserButton = document.querySelector('.eraser');
const slider = document.querySelector('.slider');
const rangeValue = document.querySelector('.rangeValue');
const normalMode = document.querySelector('.normalMode');

let size = 16;
let isEraser = false;
let isRainbowMode = false;
let isMouseDown = false;

setupGrid(size);

setupEventListeners();

function setupEventListeners(){
    slider.addEventListener('input', () => {
        rangeValue.textContent = `${slider.value} x ${slider.value}`;
    });

    slider.addEventListener('change', () => {
        grid.innerHTML = "";
        setupGrid(Number(slider.value));
    });

    grid.addEventListener('mouseover', changeCellColor);

    resetButton.addEventListener('click', resetGrid);

    rainbowMode.addEventListener('click', () =>{
        rainbowMode.classList.toggle('selected');
        isRainbowMode ^= true;
    });

    eraserButton.addEventListener('click', () =>{
        eraserButton.classList.toggle('selected');
        isEraser ^= true;
    });

    document.addEventListener('mousedown', () =>{
        isMouseDown = true;
    });

    document.addEventListener('mouseup', () =>{
        isMouseDown = false;
    });
}

function setupGrid(size){
    grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; ++i){
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'white';
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

function changeCellColor(e){
    if(!isMouseDown || !e.target.classList.contains('cell')){
        return;
    }

    if(isEraser){
        e.target.style.backgroundColor = 'white';
        return;
    }

    e.target.style.backgroundColor = getColor();
}

function getColor(){
    if(!isRainbowMode){
        return normalMode.value;
    }

    return getRandomColor();
}

function getRandomColor(){
    let color = "#";

    for (let i = 0; i < 3; ++i) {
        let val = (Math.floor(Math.random() * 256)).toString(16);
        color += ("0" + val).slice(-2);
    }

    return color;
}

function resetGrid(){
    const cellList = grid.children;

    for(let cell of cellList){
        cell.style.backgroundColor = 'white';
    }
}