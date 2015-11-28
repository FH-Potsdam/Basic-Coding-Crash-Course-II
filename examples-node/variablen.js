// playing with variables
// it doesn't matter what kind of
// variable we have all are declared equal
// with the word var
var a = 100;
var b = -42;
var c = a/b;
var decision = true;
var greetings1 = '\'Hello World\'';
var greetings2 = '"Hello World"';
var obj = {"posx":10,"posy":20,"posz":100};
var arr = [1,23,4566,76,789];
console.log("These are our results\n");
console.log('a ' , a);
console.log('b ' , b);
console.log('c ' , c);
console.log('decision ' , decision);
console.log('greetings1 ' , greetings1);
console.log('greetings2 ' , greetings2);
console.log('obj ' , obj);
console.log('arr ' , arr);

console.log('Just some variables');
console.log('Lets add a tab \t <-- Yes there is one');
console.log('by escaping characters with a \\ you can use some special symbols');
console.log('e.g on Mac we create a newline like this --> \\n');
console.log('If you look at the source code you will see here -->\nA special combination a \\ with a n ');
console.log('On windows we use the \\ with a r.');
console.log();
// the following one only works with
// console.log not in normal strings.
// (in ES6 everything will change :-))
console.log('This is a %s%s%s template string','!','&','?');

// concatenating strings
var str1 = 'Hello';
var str2 = 'World';
// This can be done by adding them together
// and passing them into a new variable
//
var str3 = '"'+ str1  + ' ' + str2+ '"';
console.log(str3);
console.log(str1 +' ' + str2 + ' ' );

