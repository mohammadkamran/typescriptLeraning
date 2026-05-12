var arr = [10, 30, 20, 40, 50, 10, 20];
var uniqueValues = arr.filter(function (num) { return arr.indexOf(num) === arr.lastIndexOf(num); });
console.log(uniqueValues);
