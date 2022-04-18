/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
*/


// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 1:' + '_'.repeat(40));
// ----------------------- Block 1: -----------------------
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// result = 5



// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 2:' + '_'.repeat(40));
// ----------------------- Block 2: -----------------------
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a); // log to the console: 1



// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 3:' + '_'.repeat(40));
// ----------------------- Block 3: -----------------------
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
 // log to the console: 3 three times