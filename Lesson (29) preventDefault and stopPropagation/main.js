// vd1
// var aElement = document.links;
// console.log(aElement);

// for(var i = 0; i < aElement.length; ++i){
//     aElement[i].onclick = function (e) {
//             console.log(e.target.href)
//             if (!e.target.href.startsWith('https://f8.edu.vn')){
//                 e.preventDefault();
//             }
//     }
// }



// vd2
// var ulElement = document.querySelector('ul')
// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//             console.log(e.target);
// }

// vd3

document.querySelector('div').onclick = function(e){
    console.log('DIV');
}
document.querySelector('button').onclick = function(e){
    console.log('You clicked me!');
    e.stopPropagation()
}
