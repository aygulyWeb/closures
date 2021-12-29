
// 4) Создайте замыкание: функция makePassword получает пароль в аргументе
// и возвращает внутреннюю функцию,
// которая принимает введенную строку и возвращает булево значение true,
// если введенная строка совпадает с паролем и faulse – если не слвпадает.

function makePassword(parol) {

	return function () {
		return parol == "Админ" ? true : false;

	}
};

let password = makePassword("Админ");

console.log(password());