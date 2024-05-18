"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var sagar = {
    name: "Sagar", id: 335
};
console.log(sagar);
sagar = { username: "SPG", id: 225 };
console.log(sagar);
function getDbId(id) {
    console.log('====================================');
    console.log("DB id is :".concat(id));
    console.log('====================================');
    if (typeof id === 'string') {
        id.toString();
        console.log("DB id is :".concat(id));
    }
    else {
        id.toExponential();
        console.log('====================================');
        console.log("DB id is :".concat(id));
        console.log('====================================');
    }
}
getDbId(3);
getDbId("3");
var data = [1, 2, 3, 4, 5, 60];
var data2 = ["sagar", "Prakash", "Giradkar"];
var data3 = ["Sagar", 1, "Prakash"];
var data4 = ["sagar", 1, 2];
console.log(data);
console.log(data2);
console.log(data3);
console.log(data4);
