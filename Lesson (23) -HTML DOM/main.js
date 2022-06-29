// alert('Hi there!');

// HTML DOM
// 1. Elements: get by id, class, tagname, CSS selector, HTML collection, etc.
// 2. Attributes
// 3. Text

// HTML DOM không phải là JavaScript

// Bản thân JS không bao gồm HTML DOM

// JavaScript: chạy trên Browser | Server (Node.js)

//API (Application Programming Interface)

// Browser: HTML --> DOM --> WEB API --> Browser

//

document.write('<h1>Hello World</h1>');

var headingNode = document.getElementById('heading');
var headingNodes = document.getElementsByClassName('heading');
var headingNodesTag = document.getElementsByTagName('h2');
console.log(headingNode);
console.log(headingNodes);
console.log(headingNodesTag);
var headingNodeQuery = document.querySelector('.box .container .heading-2:nth-child(2)');
console.log(headingNodeQuery);
var headingNodeQueryAll = document.querySelectorAll('.box .container .heading-2');
console.log(headingNodeQueryAll);
console.log(headingNodeQueryAll[2]);

// Get elements methods 2
var BoxNodes = document.querySelectorAll('.box-1')
console.log(BoxNodes);


// Get element methods 3
// 1. getElementById        --> return element
// 2. getElementsByClassName
// 3. getElementsByTagName  --> return HTML collection
// 4. querySelector         --> return element
// 5. querySelectorAll
// 6. HTML collection       (forms, img, a,...)
// 7. document.write()



// Attribute node & Text node

// DOM attributes
// Thêm attribute vào node <element>
var headingElement = document.querySelector('h1');
console.log(headingElement.title = 'heading');
console.log(headingElement.id = 'headingId');
headingElement.className = 'headingClass';
headingElement.setAttribute('title', 'headingTitle');
console.log(headingElement.getAttribute('title'));
headingElement.removeAttribute('title');
console.log(headingElement.getAttribute('title'));
// alert(headingElement.title = 'heading');


// DOM text node
// InnerText and TextContent
//1. InnerText: lấy text trong node

var headingElement = document.querySelector('h1');
console.log(headingElement.innerText);
console.log(headingElement.textContent);
headingElement.textContent = 'Heading is created by JS';

// Sự khác biệt giữa innerText và textContent
// innerText: lấy text trong node
// textContent: lấy text trong node và các node con


