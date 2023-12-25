var getAdder = function () { var res = 0; return function(x) { res += x; return res; } };
var sum = getAdder();
sum(1);
sum(3);
var sum2 = getAdder();
console.log(sum2(3))
console.log(sum2(5))
console.log(sum2(20))
