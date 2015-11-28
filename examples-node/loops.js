// looping ranges of values
var harry = [1,5,7,9,54,54.5,-23];
console.log('\nlooping from front to end');
for(var i =0; i < harry.length;i++){
  console.log('the index is "%s" the value is "%s"',i,harry[i]);
}

console.log('\nlooping from end to front');
for(var i = harry.length -1; i >= 0;i=i-1){
  console.log('the index is "%s" the value is "%s"',i,harry[i]);
}
// looping objects

console.log('\nlooping objects');
var foo = {"x":10,
            "y":20,
            "z":-20,
            "name":"bah",
            "arr":[1,2,36,78]
              };

// could also be key instead of jimmy
// would make more sense
for(var jimmy in foo){
  console.log('The key is called "%s"',jimmy);
  console.log(foo[jimmy]);
  if(jimmy==='arr' && foo.hasOwnProperty('arr')){
    for(var i = 0; i < foo.arr.length;i++){
      console.log(foo.arr[i]);
    }
  }
}
// looping conditions
var bool = true;
var counter = 0;
while (bool=== true) {
  console.log("something");
  counter++;
  if(counter === 5){
  break;
}
}
