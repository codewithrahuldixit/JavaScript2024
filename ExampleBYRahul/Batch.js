console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
  var x = 45.7;
   console.log(typeof(x));
  console.log(+"1.1"+ +"1.1");
  console.log("Rahul" instanceof String);
})();