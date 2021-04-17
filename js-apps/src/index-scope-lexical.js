var a = 10;
var b = 20;

function foo() {
    var a = 100;
    console.log(`foo ${a}`);
    function bar() {
        var a = 200;
        console.log(`bar ${a}`);
        console.log(`b ${b}`);
       // console.log(`c ${c}`)
    }
    bar();
}
foo();

//property lookup ; current obj---its parent---its parent so....
//obj.a ----current obj---prototype---object--undefined