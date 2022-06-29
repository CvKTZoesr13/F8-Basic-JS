// Sử dụng DOM event để làm nhiều việc cùng lúc
var btn = document.querySelector('#btn');

btn.onclick = function(){
    console.log('Viec 1');
    console.log('Viec 2');
    console.log('Viec 3');
}

// Hủy bỏ lắng nghe sau 3s
setTimeout(() => {
    btn.onclick = function(){}
}, 3000);

// đồng loạt đc gọi, và đc thực hiện theo thứ tự
btn.addEventListener('click', function(e){
    console.log('EventListener 1');
})
btn.addEventListener('click', function(e){
    console.log('EventListener 2');
})
btn.addEventListener('click', function(e){
    console.log('EventListener 3');
})

function Work1() {
    console.log('Viec 1')
}
btn.addEventListener('click',Work1);

setTimeout(() => {
    btn.removeEventListener('click', Work1)
}, 3000);
