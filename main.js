function strikethrough(){
const li = document.querySelector('li');
li.style.textDecoration = "line-through";
console.log('li', li)
}

strikethrough();

/////////////////

function setImage(id, url){
    const img = document.querySelector(id);
    img.height = 250;
    img.src = url;
}

setImage('#image-1', '')

////////////

function removeFirstLi(){
    const removeFirst = document.querySelector('#arguments li');
    removeFirst.remove();
}

removeFirstLi();
removeFirstLi();

////////////

function changeSize(id, size){
    const changeSize = document.querySelector(id);
    changeSize.style.fontSize = size
}

changeSize('#thing-2', '28px')