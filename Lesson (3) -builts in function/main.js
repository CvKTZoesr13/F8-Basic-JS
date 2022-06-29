// alert('Hi there!');


// Giới thiệu một số hàm built in

/**
 * 1. Alert
 * 2. Confirm
 * 3. Prompt
 * 4. Console
 * 5. set Timeout
 * 6. set Interval
 */



var name = prompt('What is your name?');
// var Name = CvKTZoesr;
// confirm('Are you sure your name is ' + Name + '?');

setTimeout(function() {
    alert('Hi there!');
}, 1000);

setInterval(function()  {
    console.log('Hi there! I\'ll back after 1 second' + Math.random());
}, 1000);

setTimeout(
    () => {
        console.log('Hi there!');
    },
    1000
)
setInterval(() => {
    console.log('Hi there! I\'ll back after 1 second' + Math.random());
})