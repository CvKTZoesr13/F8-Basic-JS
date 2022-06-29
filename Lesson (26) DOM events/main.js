// alert('Hi there!');
// DOM events
// 1. Attribute events
// Assign event using the element node


function Test() {
    var h1Element = document.getElementById('create');
h1Element.onclick = function(callbackMouseEvent){
    console.log(callbackMouseEvent.target)
}
}
Test();
var h1Element = document.querySelectorAll('h1');

for(var i = 0; i <h1Element.length; i++){
    h1Element[i].onclick = function(e){
        console.log(this)
    }
}

//