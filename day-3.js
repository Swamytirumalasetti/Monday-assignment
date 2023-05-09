//<< Assignment 1 >>\
var isNumber = true;
var isString = false;
console.log((isNumber));
console.log((isString));
console.log(typeof (isNumber));
//var any= 10;
var any = "Maha";
console.log(typeof (any));
//String Array
var array = ['TypeScript', "Angular", "Reactjs"];
console.log(array);
console.log(typeof (array));
//Heterogeneous array
var array1 = [101, 'Swamy', "Hyderabad"];
console.log(array1);
console.log(typeof (array1));
//<<< Assignmennt 2 >>>
var y = "alerts in type script ";
alert(y);
console.log(y);
var a = "Do you really want to see the output..";
confirm(a);
console.log(a);
//  let z:string = "102 error"
//  console.log(prompt(z));
var z = prompt("error");
console.log(z);
//Assignment 3
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 0] = "apple";
    fruit[fruit["graoes"] = 1] = "graoes";
    fruit[fruit["orange"] = 2] = "orange";
})(fruit || (fruit = {}));
console.log(fruit);
console.log(fruit[0]);
