function large_shirt1(size, label) {
    return " my shirt size is ".concat(size, " and my label is ").concat(label);
}
var f1 = large_shirt1("large", "I love typescript");
console.log(f1);
function large_shirt2(size, label) {
    return " my shirt size is ".concat(size, " and my label is  ").concat(label);
}
var f2 = large_shirt2("medium", "I love typescript");
console.log(f2);
function large_shirt3(size, label) {
    return "my shirt size is ".concat(size, " and my label is ").concat(label);
}
var f3 = large_shirt3("Any size", "I love typescript");
console.log(f3);
