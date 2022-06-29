// alert('Hi there!');
// Toán tử ba ngôi -- ternary operator

var course = {
    name: 'JavaScript',
    price: 100,
    duration: '1 month',
}

if (course.price > 0) {
    console.log(`${course.name}'s price is ${course.price}$`);
}
else {
    console.log(`${course.name} is free`);
}

// or

var result = course.price > 0 ? `${course.name}'s price is ${course.price}$` : `${course.name} is free`;
console.log(result);