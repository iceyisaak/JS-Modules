// speak.js imports function from math.js to use within the function by invoking add(), then it is exported as the default function out of speak.js.

var add = require('./math').add;

module.exports = function (name, age) {
 var agePlus5 = add(age, 5);

 return "name" + " is " + agePlus5 + " years old.";
};