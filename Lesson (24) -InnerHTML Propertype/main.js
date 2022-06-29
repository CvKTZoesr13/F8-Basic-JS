// alert('Hi there!');
//1. Element
//2. Attribute
// 3. Text

// innerHTML, outerHTML
var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1 style ="color: red;">Hello World</h1>';
// console.log(boxElement.querySelector('h1'));
// console.log(boxElement.innerText = `


//     Hello World


// `);

// console.log(boxElement.textContent = `  


//     Hello World

    
// `);
console.log(boxElement.outerHTML);
console.log(boxElement.innerHTML);
boxElement.draggable = true;
boxElement.contentEditable = true;
