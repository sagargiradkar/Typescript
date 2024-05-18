"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    var sum = num + 5;
    console.log(sum);
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
addTwo(5);
var upper = getUpper("Sagar");
console.log(upper);
