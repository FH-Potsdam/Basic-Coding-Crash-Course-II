// we can create conditions and check if they are true or false
// first we need some variables to play with
var x = 100;
var y = 420;
var z = -23;
var status = true;
var obj = {
  "something": "Hello World",
  "anything": true,
  "arr": [1, 4, 57, 90, 6, 54]
};

// check if ther is a property called something
if (obj.hasOwnProperty('something') === true) {
  console.log("The obj %s has property called something", obj);
}
// Check some other things from that object
if (obj.arr.length === 6) {
  console.log('obj.arr.length is %s', obj.arr.length);
}
if (obj.arr[2] === 57) {
  console.log('obj.arr[2] is %s', obj.arr[2]);
}

// === vs ==
// The comparsion with === is typesafe
// the one with == is not
// read this article for further insight
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
if (obj.arr[3] == '90') {
  console.log('not typesafe but true');
}
// === vs ==
if (obj.arr[3] === '90') {
  console.log('typesafe true');
} else {
  console.log('typesafe false');

}

// first come first served
// the if (){}else if(){}else
// statements work first come first served
if (x < y) {
  console.log('Yes x is smaller then y');
} else if (status === true) {
  console.log('status is true');
} else {
  console.log('No x is not smaller then y');
}

// you can chain togeter a lot of logic in one ()
// but at some point it becomes unreadalbe
// (WARNING the code below is hypothetical
// we don't really know if it ever can be true)
if ((x > y && x < z) && (z < y || z === 100)) {
  // do something
}
// consider an approach that is more like this
if (x > y && x < z) {
  if (z < y || z === 100) {
    // do something else
  }
}

// another fine thing with booleans is you can switch them
// with the ! operator
//
if (status === true) {
  console.log('status is %s', status);
}

status = !status; // < -- now its false

if (status === false) {
  console.log('status is %s', status);

}

// the next quesiton is the some as the one  above
if (status !== true) {
  console.log('status is %s again', status);
}

// this is something you also will see
status = !status;

if (status) {
  console.log('status is now %s', status);
}

status = !status;
// like this one too
if (!status) {
  console.log('status is again %s', status);
}