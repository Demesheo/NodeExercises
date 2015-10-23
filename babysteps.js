// BABY STEPS
var numbers = process.argv.slice(2, process.argv.length);
var result = 0;
numbers.forEach(function(number){
	result += Number(number);
});
console.log(result);