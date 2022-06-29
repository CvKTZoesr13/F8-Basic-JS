// alert('Hi there!');
Array.prototype.reduce2 = function(callback, initialValue) {
    let i = 0;
    if(arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }
    var result = initialValue;
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((callback, initialValue) => {
    return callback + initialValue;
});
console.log(result);