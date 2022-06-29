// alert('Hi there!');
var boxElement = document.querySelector('.box');

boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red';

// or you can use the assign method

Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
});

console.log(boxElement.style.backgroundColor); // lấy ra thuộc tính css


// ClassList property

// add
// contain
// remove
// toggle

console.log(boxElement.classList.add('red'));
console.log(boxElement.classList.contains('red'));
setInterval(() => {
    boxElement.classList.toggle('red');
}, 500);