/*
Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/


// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 1:' + '_'.repeat(40));
// ----------------------- Block 1: -----------------------
function funcA() {
    console.log(a); // log to the console: undefine
    console.log(foo()); // log to the console: 2
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();



// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 2:' + '_'.repeat(40));
// ----------------------- Block 2: -----------------------
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); // log to the console: Aurelio De Rosa
var test = obj.prop.getFullName;
console.log(test()); // log to the console: undefine



// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 3:' + '_'.repeat(40));
// ----------------------- Block 3: -----------------------
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); // log to the console: undefined
console.log(typeof b); // log to the console: number



// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 4:' + '_'.repeat(40));
// ----------------------- Block 4: -----------------------
function funcC() {
    console.log("1");
}
funcC(); // log to the console: "2"
function funcC() {
    console.log("2");
}
funcC(); // log to the console: "2"


// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 5:' + '_'.repeat(40));
// ----------------------- Block 5: -----------------------
function funcD1() {
    d = 1;
}
funcD1();
console.log(d); // log to the console: 1
let e; // fix - step 1
function funcD2() {
    e = 1; // fix - step 2
}
funcD2();
// console.log(e); // ReferenceError: e is not defined
console.log(e); // fix - step 3



// -------------------------------------------------------
console.log('_'.repeat(40) + 'Block 6:' + '_'.repeat(40));
// ----------------------- Block 6: -----------------------
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); // log to the console: "Value of f in global scope: " undefined
var f = 1;
funcE(); // log to the console: "Value of f in global scope: " 1