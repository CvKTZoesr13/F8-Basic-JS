// alert('Hi there!');

// 1. input / select
// 2. key up /down


var inputElement 
= 
document.querySelector('input[type = "text"]');
var inputValue;
inputElement.onchange = function Onchange(e) {
    // inputValue = e.value;
    console.log(e.target.value)
}
// console.log(inputValue);
// inputElement.onclick = function(){
//     console.log(Math.random())
// }

var checkElement = document.querySelector('input[type = "checkbox"]')
checkElement.onchange = function (e){ 
        if(e.target.checked){
            Object.assign(inputElement.style, {
                border: '2px solid green',
        })
        }
        else {
            Object.assign(inputElement.style, {
                border: '1px solid black'
            })
        }
        console.log(e.target.checked)
}