var array = [ 'JavaScript', 'PHP', 'Ruby'];
function logger(...rest){   // toán tử rest
    for(var i = 0; i <rest.length; i++){
        console.log(rest[i]);
    }
}

logger(...array); // Toán tử spread

function hightlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, value) => [...acc, `<span style ="color: red">${value}</span>`, strings.shift()], 
        [first]
    )
    .join('');
    console.log(first);
    console.log(strings);
    console.log(values);
}

var brand = 'F8';
var course = 'JavaScript';
const html = hightlight`Học lập trình ${course} tại ${brand}!`

console.log(html);
document.body.innerHTML = html;
