// 6) Каков будет результат выполнения приведенного кода и почему? 

var num = 7;

function getNum() {

	var num = 8;

	function getValue() {
		return num;
	}

	return getValue;

}

var res = getNum();

alert(res()); //8
