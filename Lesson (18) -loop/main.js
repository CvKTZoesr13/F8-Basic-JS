// alert('Hi there!');
/**
 * Vòng lặp -- Loop
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua Key của đối tượng
 * 3. for/of - Lặp qua values của đối tượng
 * 4. while - Lặp với điều kiện đúng
 * 5. do while - Lặp ít nhất một lần, sau đó lặp với điều kiện đúng
 * 
 */


// For loop

for(var i = 0; i < 100; i++) {
    console.log(i);
}

var myArray = [
    'JavaScript',
    'HTML',
    'CSS',
    'PHP',
    'SQL',
    'Python',
]
var arrayLength = myArray.length;
for(var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}


// For/In loop
var myInfo = {
    name: 'Nguyen Van A',
    age: '20',
    address: 'Hanoi',
    phone: '0987654321',
}
for(var key in myInfo) {
    console.log(key + ': ' + myInfo[key]);
}

// for of loop
var languages = [
    'JavaScript',
    'HTML',
    'CSS',
]

for(var value of languages) { 
    console.log(value);
}

var string = 'Hello World';
for(var char of string) {
    console.log(char);
}

for (var values of Object.keys(myInfo)) {
    console.log(myInfo[values]);
}

// While loop
var i = 0;
while(i < 100) {
    console.log(i);
    i++;
}
// Do while loop
var i = 0;
do {
    console.log(i);
    i++;
}
while(i < 100);


// Break and continue in loop
for (var i = 0; i < 100; ++i) {
    if(i == 50) {
        break;
    }
    if(i%2 !== 0) {
        continue;
    }
    console.log(i);
}
// Loop in Loop (Nested loop)
var exampleArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

var length = exampleArray.length;
for(var i = 0; i < length; i++) {
    console.log(exampleArray[i]);
    console.log('\nDay la phan tu cua mang thu: ' + (i + 1) );
    var innerLength = exampleArray[i].length;
    for(var j = 0; j < innerLength; j++) {
        console.log(exampleArray[i][j]);
    }
}

// other example
for(var i = 100; i > 0; i-=5) {
    console.log(i);
}