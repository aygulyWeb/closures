// 8) создайте счетчик. В счетчике должно быть: 
// 1) Метод обнуление счетчика. 
// 2) Возможность изменять начало отчета счетчика.  

function getcount(count) {

	function countNoll() {
		return ++count;
	};
	return countNoll;

};

let num = getcount(0);

console.log(num());
console.log(num());
console.log(num());