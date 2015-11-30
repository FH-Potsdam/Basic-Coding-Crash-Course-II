// Different loops for different occasions.
//
// looping ranges of values
//
var harry = [1, 5, 7, 9, 54, 54.5, -23]; // declare a new array wit hcontent
console.log('\nlooping from front to end'); // just some info
for (var i = 0; i < harry.length; i++) {
  // using cool templates in console
  console.log('the index is "%s" the value is "%s"', i, harry[i]);
}
// we can loop the other way around
console.log('\nlooping from end to front');
for (var i = harry.length - 1; i >= 0; i = i - 1) {
  console.log('the index is "%s" the value is "%s"', i, harry[i]);
}
// looping objects
// for objects you can use a "for var key in object" loop
console.log('\nlooping objects');
// jsu some object we can loop
var foo = {
  "x": 10,
  "y": 20,
  "z": -20,
  "name": "bah",
  "arr": [1, 2, 36, 78]
};

// could also be key instead of jimmy
// would make more sense
// but to see that the name is our decission
// we call him jimmy
for (var jimmy in foo) {
  console.log('The key is called "%s"', jimmy);
  console.log(foo[jimmy]);
  // now within the loop we create a special occasion
  // if we have a key called "arr"
  // and it is the key called "arr"
  if (jimmy === 'arr' && foo.hasOwnProperty('arr') === true) {
    // we do another loop
    for (var i = 0; i < foo.arr.length; i++) {
      console.log(foo.arr[i]);
    }
  }
}

// looping conditions
// The third kind of loop is the while loop
// it can be used to loop as long as a condition is true
var bool = true;
var counter = 0;
while (bool === true) {
  // WARNING we need some break statement so we can jup out again
  // if not we end up in a continous loop
  console.log('counter is %s', counter);
  counter++;
  if (counter === 5) {
    // let's break when the counter s 5
    break;
  }
}