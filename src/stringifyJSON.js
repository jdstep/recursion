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
    return '"' + obj + '"';
  }

  if (obj.constructor === Array) {
    var i;

    stringed += '[';

    for (i = 0; i < obj.length; i+=1) {
      stringed += stringifyJSON(obj[i]);
      stringed += ',';
    }

    if (stringed[stringed.length - 1] === ',') {
      stringed = stringed.slice(0, -1);
    }

    stringed += ']';

    return stringed;
  }
  
  if (typeof obj === 'object') {
    var key;

    stringed += '{'

    for (key in obj) {
      stringed += '"' + key + '"' + ':'; 
      stringed += stringifyJSON(obj[key]);
      stringed += ',';
    }

    if (stringed[stringed.length - 1] === ',') {
      stringed = stringed.slice(0, -1);
    }

    stringed += '}';

    return stringed;
  }

};


var toStringify = {"a": "apple"};

console.log(JSON.stringify(toStringify));

console.log(stringifyJSON(toStringify));

console.log(JSON.stringify(toStringify) === stringifyJSON(toStringify));




