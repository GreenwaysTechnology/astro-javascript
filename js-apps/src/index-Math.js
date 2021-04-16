//Math Object
//static properties
console.log(`PI ${Math.PI}`)
console.log(`PI ${Math.PI.toFixed(3)}`)
//static methods
console.log(`Random Number ${Math.random()}`)
console.log(`Round ${Math.round(0.3)}`)
console.log(`Round ${Math.round(Math.random().toFixed(4))}`)

//
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

console.log(random(1, 10));