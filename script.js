//appending element with id and class
function createElement(type, className,id, where) {
    const newDiv = document.createElement(type)
    //newDiv.className = className
    newDiv.setAttribute("class",className)
    newDiv.setAttribute("id",id)
    newDiv.addEventListener('mouseover', draw)
    newDiv.addEventListener('mousedown',draw)
    document.getElementById(where).appendChild(newDiv)
};
//creating grid
let sizeOfGrid = 16 * 16;
for (let i = 0; i < sizeOfGrid; i++) {
    createElement('div', 'Grid-elements',i,'grid');

}
//const boxes = document.querySelectorAll('.Grid-elements');
//boxes.forEach(el => el.addEventListener('mousedown', event=>{event.target.className= "Colored"}));
let clicked = false
document.body.onmousedown = () => (clicked = true)
document.body.onmouseup = () => (clicked = false)

function draw(box){
    if (box.type=== 'mouseover' && !clicked) return
    else {
    box.target.className = "Colored"
        }
}
//function writeId()
// event listener
/*
for (let i =0; i<sizeOfGrid; i++){
    let box = document.getElementById(i.toString())
    box.addEventListener()
}*/

