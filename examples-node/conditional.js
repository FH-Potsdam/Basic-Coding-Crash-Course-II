var x = 100;
var y = 420;
var z = -23;
var status = true;
var obj = {"something":"Hello World",
            "anything":true,
            "arr":[1,4,57,90,6,54]
          };

if(obj.hasOwnProperty('something')===true){
}
if(obj.arr.length === 6){

}
if(obj.arr[2] === 57){

}

// === vs ==
if(obj.arr[3] == '90'){
  console.log('not typesafe but true');
}
// === vs ==
if(obj.arr[3] === '90'){
  console.log('typesafe true');
}

// first come first served
if(x < y){
  console.log('Yes x is smaller then y');
}else if (status === true){
  console.log('status is true');
} else{
console.log('No x is not smaller then y');
}
if((x>y && x < z) && (z < y || z === 100)){
 // do something
}
if(x>y && x < z){
  if(z<y || z===100){
    // do something else
  }
}

if(status === true){
  console.log('true it is!');
}

status = !status; // < -- false

if(status === false){
  console.log('false it is!');
}

if(status !== true){
  console.log('false it is!');
}


if(status){
  console.log('true it is!');
}

status = !status;

if(!status){
  console.log('false it is!');
}
