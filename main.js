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

setImage('#image-1', 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg');


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


//// Part 2 ==================

function appendArgument(domElement){
    const args = document.querySelector('#arguments');
    args.appendChild(domElement);
}

const img = document.createElement('img');
img.src = 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg';

appendArgument(img);

///===

function modifyHeight(imageElement){
    imageElement.style.height = "30px";
}

const image1 = document.querySelector('#image-1');
modifyHeight(image1);

///===

function makeInvisible(input){
    invisibleClass.className = 'invisible';
}

makeInvisible('image-1');

/// Part 3 ============

function createLi(text){
    const li = document.createElement('li');
    const returnValue = li.innerText = text;
    return returnValue;
}

const testLi = createLi('this is our test li!');
appendArgument(testli);

///===

function createHeader(size, text){
    const tagName = 'h' + size;
    const header = document.createElement(tagName);
    header.innerText = text;
    return header;
}

const h =  createHeader('6', 'tuesday morning! hurray!');
appendArgument(h);