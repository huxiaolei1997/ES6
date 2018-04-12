// ES5 中常量的写法
Object.defineProperty(window, "PI2", {
	value: 3.1415926,
	writable: false
});
console.log(window.PI2);

// ES6 的常量写法
const PI = 3.1415926;
//PI = 4;
console.log(PI);
var callbacks = [];
for (var i = 0; i <= 2; i++) {
	callbacks[i] = function() {
		return i * 2;
	}
}

console.table([
	callbacks[0](),
	callbacks[1](),
	callbacks[2](),
]);

// 作用域
{
	function foo() {
		return 1
	}
	console.log("foo() === 1", foo() === 1)
	{
		function foo() {
			return 2
		}
		console.log("foo() === 2", foo() === 2)
	}
	console.log("foo() === 1", foo() === 1)
}




// ES3, ES5
{
	var evens = [1, 2, 3, 4, 5];
	var odds = evens.map(function(v) {
		return v + 1;
	})
	console.log(evens, odds);
}

// ES6
{
	let evens = [1, 2, 3, 4, 5];
	let odds = evens.map(v => v + 1);
	console.log(evens, odds);
}
