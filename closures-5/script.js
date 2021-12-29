
// 5) Создайте замыкание: функция addition получает число n и возвращает внутреннюю функцию.
// Эта функция также получает число, прибавляет его к n и возвращает результат.

function addition(n) {

	return function (num) {

		let result = n + num;
		return result;

	}
};

let res1 = (addition(8)(7))
let res2 = (addition(10)(2))

console.log(res1);
console.log(res2);
