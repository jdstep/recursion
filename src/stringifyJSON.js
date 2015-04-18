// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// FROM MDN
//
// boolean, number, and string objects are converted according to predefined semantics
//
// if undefined, a function, or a symbol it is omitted or ignored (in an array)

var _ = require('underscore');

var stringifyJSON = function(obj) {
  var stringed = '';

  // your code goes here

  // probably need object.keys

  // print the {, key, semicolon, and comma for an object

  // symbol-keyed properties are ignored

  // var keys = Object.keys(obj);

  // recursively step through the object

  // if obj is an object, print the {


  // check if it is a boolean, number, or string

  // USE RECURSION TO CHECK WHAT EACH VALUE IS USING THIS FUNCTION

  if (typeof obj === 'boolean') {
    if (obj === true) {
      return 'true'
    }

    if (obj === false) {
      return 'false'
    }
  }

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (obj.constructor === Array) {
    var i;
    stringed += '[';
    for (i = 0; i < obj.length; i+=1) {
      stringed += stringifyJSON(obj[i]);
      if (i < (obj.length - 1)) {
        stringed += ',';
      } else {
        stringed += ']';
      }
    }
    return stringed;
  }
  


  // concatenate (THIS IS MAYBE WHERE RECURSION IS NEEDED) the key

};


var toStringify = [1, 2, 3];

console.log(JSON.stringify(toStringify));

console.log(stringifyJSON(toStringify));




