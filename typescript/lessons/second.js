var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var aa = "great";
var bb = 23432;
console.log(aa);
console.log(bb);
