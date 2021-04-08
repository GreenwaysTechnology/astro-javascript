var str = '';

for (var i = 0; i < 9; i++) {
    str = str + i;
}

console.log(str);

var n = 0;

while (n < 10) {
    console.log(n)
    n++;
}

console.log(n);
// expected output

var result = '';
var i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"