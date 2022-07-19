// assignment of elements
//const slider = document.getElementById('gridSizeSlider');
const defaultSize = 16;
const range = document.getElementById('gridSize');
const grid = document.getElementById('grid');
const btnClear = document.getElementById('clrBtn');
const sizeNew = document.getElementById('gridSizeSlider')
const btnSizeNew = document.getElementById('gridSizeSet')
const sliderValue = document.getElementById('sliderValue')
let size = defaultSize;
let clicked = false

// assignment of actions
document.body.onmousedown = () => (clicked = true)
document.body.onmouseup = () => (clicked = false)
sizeNew.onchange =() => sliderValue.innerHTML = (sizeNew.value +'x'+sizeNew.value);
//creating element with id and class and event listener
function createElement(type, className, id, where) {
    const newDiv = document.createElement(type)
    newDiv.setAttribute("class", className)
    newDiv.setAttribute("id", id)
    newDiv.addEventListener('mouseover', draw)
    newDiv.addEventListener('mousedown', draw)
    document.getElementById(where).appendChild(newDiv)
}


//creating grid
function createGrid(size) {
    document.getElementById('grid').style.gridTemplateRows = 'repeat(' + size + ',1fr)'
    document.getElementById('grid').style.gridTemplateColumns = 'repeat(' + size + ',1fr)'
    let sizeOfGrid = size * size;
    for (let i = 0; i < sizeOfGrid; i++) {
        createElement('div', 'Grid-elements', i, 'grid');
    }

}

function reload() {
    clear()
    createGrid(size)
}

function clear() {
    grid.innerHTML = ''
    createGrid()
}

//updating grid
btnSizeNew.onclick = () => {
    (size = sizeNew.value)
    reload();
    console.log(size)
}
btnClear.onclick = () => {
    (size = defaultSize)
    reload()
}

//function or drawing
function draw(box) {
    if (box.type === 'mouseover' && !clicked) return
    else {
        box.target.style.backgroundColor = '#ffffff';
    }
}

createGrid(size)


