let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourthFifth = document.querySelector('.fourthFifth');
let sixth = document.querySelector('.sixth');

first.onclick = function(){
	//пример 1
	let a = 1, b = 1, c, d;
	/*
		++ - унарный оператор увеличивающий знпачение a на 1
		тк форма записи префиксная, то сначала происходит увеличение значения a на 1 (в a будет 2),
		а затем значение a присваивается c (тк a++ равняется 2, то в c будет 2)
	*/
	c = ++a;
	alert(c); // ответ: 2
	//пример 2
	/*
		++ - унарный оператор увеличивающий знпачение b на 1
		тк форма записи постфиксная, то сначала значение b присваивается d (тк b равняется 1, то в d будет 1),
		а затем происходит увеличение значения b на 1 (в будет 2)
	*/
	d = b++;
	alert(d); //ответ: 1
	//пример 3
	/*
		зничение a на данный момент равно 2
		форма записи ++ префиксная, значит сначала значение a будет увеличено на 1 (в a будет 3)
		а затем выполнена операция сложения a с 2 и присвоение  c результата сложения
	*/
	c = 2 + ++a;
	alert(c); //ответ: 5
	//пример 4

	/*
		зничение a на данный момент равно 2
		форма записи ++ постфиксная, значит сначала выполнена операция сложения b с 2 и присвоение d результата сложения
		а затем значение b будет увеличено на 1 (в b будет 3)
	*/
	d = 2 + b++;
	alert(d); //ответ: 4
	/*
		выше написано, что в результате последней операции ++ в a находится значение 3
	*/
	alert(a); //3
	/*
		выше написано, что в результате последней операции ++ в b находится значение 3
	*/
	alert(b); //3
}

second.onclick = function(){
	/*
		Создается переменная a и инициализируется значением 2
	*/
	let a = 2;
	/*
	 Создается переменная x и инициализируется значением, полученным в результате вычисления выражения
	 в котором, по приоритету сначала выполняется выражение в скобках,
	 в котором переменной a присваивается текущее значение переменной a, умноженное на 2,
	 таким образом на данный момент значение переменной a равно 4
	 затем происходит сложение 1 и результата выражения в скобках
	 и результат присваивается переменной x,
	 в x таким образом находится значение 5
	 
	 Итого переменная a равна 4
	 переменная x равна 5
	*/
	let x = 1 + (a *= 2);
	debugger;
}

third.onclick = function(){
	let a = +(prompt('Введите первое число'));
	let b = +(prompt('Введите второе число'));
	
	if (a >= 0 && b >= 0) {
		alert(`Разность a и b равна ${a - b}`);
	}
	
	else if (a < 0 && b < 0) {
		alert(`Произведение a и b равно ${a * b}`);
	}
	
	else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
		alert(`Сумма a и b равна ${a + b}`);
	}
	
	else{
		alert('Необходимо ввести именно числа');
	}
}

fourthFifth.onclick = function(){
	
	/**
	*Возвращает сумму двух чисел
	*@param {number} a Первый аргумент
	*@param {number} b Второй аргумент
	*@returns {number}  Возвращаемый результат (сумма)
	*/
	function sum(a, b){
		return a + b;
	}
	
	/**
	*Возвращает разность двух чисел
	*@param {number} a Первый аргумент
	*@param {number} b Второй аргумент
	*@returns {number}  Возвращаемый результат (разность)
	*/
	function dif(a, b){
		return a - b;
	}
	
	/**
	*Возвращает произведение двух чисел
	*@param {number} a Первый аргумент
	*@param {number} b Второй аргумент
	*@returns {number}  Возвращаемый результат (произвеление)
	*/
	function mul(a, b){
		return a * b;
	}
	
	/**
	*Возвращает результат деления двух чисел
	*@param {number} a Первый аргумент
	*@param {number} b Второй аргумент
	*@returns {number}  Возвращаемый результат (результат деления a на b)
	*/
	function div(a, b){
		return a / b;
	}
	
	/**
	*Возвращает результат арифметической операции заданной пользователем
	*@param {number} arg1 Первый аргумент
	*@param {number} arg2 Второй аргумент
	*@param {string} operation Арифметическая операция
	*@returns {number}  Возвращаемый результат
	*/
	function mathOperation(arg1, arg2, operation){
		
		switch (operation) {
		
		case '+' :
			return sum(arg1, arg2);
			break;
			
		case '-' :
			return dif(arg1, arg2);
			break;
			
		case '*' :
			return mul(arg1, arg2);
			break;
			
		case '/' :
			return div(arg1, arg2);
			break;
			
		default:
			alert('Введите корректную арифметическую операцию');
			return mathOperation(arg1, arg2, prompt('Введите арифметическую операцию'));
		}
	}
	
	let result = mathOperation(+prompt('Введите вервый аргумент'), +prompt('Введите второй аргумент'), prompt('Введите арифметическую операцию'));
	alert(`Результат равен ${result}`);
}

sixth.onclick = function(){
	
	function addingMoney(moneyCount){
		moneyCount = prompt('Введите сумму пополнения');
		
		let lastNumber = +(moneyCount.charAt(moneyCount.length - 2) + moneyCount.charAt(moneyCount.length - 1));
		if (isNaN(lastNumber)){
			alert('Введите корректное число');
			addingMoney();
		}
		else if (lastNumber >= 5 && lastNumber <= 20){
			alert(`Ваша сумма в ${+moneyCount} рублей успешно зачислена`);
		} else {
			lastNumber = +(moneyCount.charAt(moneyCount.length - 1));
			switch (lastNumber) {
				
				case 0 :
				case 5 :
				case 6 :
				case 7 :
				case 8 :
				case 9 :
				alert(`Ваша сумма в ${+moneyCount} рублей успешно зачислена`);
				break;
				
				case 1 :
				alert(`Ваша сумма в ${+moneyCount} рубль успешно зачислена`);
				break;
				
				case 2 :
				case 3 :
				case 4 :
				alert(`Ваша сумма в ${+moneyCount} рубля успешно зачислена`);
				break;
			}
		}
	}
	
	addingMoney();
}