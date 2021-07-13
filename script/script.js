'use strict';
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');

function decomposition(number) {
	let object = {};
	
	if (isNaN(+number) || number < 0 || number > 999 || !Number.isInteger(+number)){
		alert('Нужно ввести целое число в пределах от 0 до 999');
	} else {
		object = {
			units: parseInt(number - parseInt(number/10)*10),
			tens: parseInt(parseInt(number/10) - parseInt(number/100)*10),
			hundreds: parseInt(number/100)
		}
	}
	
	console.log(object);
	return object;
}

first.onclick = function(){
	let number = prompt('Введите целое число от 0 до 999');
	
	decomposition(number);
}

second.onclick = function(){
	/*---ES5---*/
	
	function ProductES5(name, price){
		this.name = name;
		this.price = price;
	}
	
	ProductES5.prototype.make25PercentDiscount = function(){
		this.price *= 0.75;
	}
	
	let product1  = new ProductES5('coat', 1000);
	console.log(product1);
	product1.make25PercentDiscount();
	console.log(product1);
	
	/*---ES6---*/
	
	class ProductES6{
		
		constructor(name, price){
			this.name = name;
			this.price = price;
		}
		
		make25PercentDiscount(){
			this.price *= 0.75;
		}
	
	}
	
	let product2  = new ProductES6('coat', 1000);
	console.log(product2);
	product2.make25PercentDiscount();
	console.log(product2);
}

third.onclick = function(){
	/*---ES5---*/
	
	function PostES5(author, text, date){
		this.author = author;
		this.text = text;
		this.date = date;
	}
	
	PostES5.prototype.edit = function(text){
		this.text = text;
	}
	
	function AttachedPostES5(author, text, date){
		PostES5.call(this, author, text, date);
		this.highlited = false;
	}
	
	AttachedPostES5.prototype = Object.create(PostES5.prototype);
	AttachedPostES5.prototype.constructor = AttachedPostES5;
	
	AttachedPostES5.prototype.makeTextHighlited = function(){
		this.highlited = true;
	}
	
	let post1 = new PostES5('автор1', 'текст1', '23/04/21');
	console.log(post1);
	post1.edit('новый текст1');
	console.log(post1);
	
	let post2 = new AttachedPostES5('автор2', 'текст2', '19/08/21');
	console.log(post2);
	post2.edit('новый текст2');
	console.log(post2);
	post2.makeTextHighlited();
	console.log(post2);
	
	/*---ES5---*/
	
	class PostES6{
		constructor(author, text, date){
			this.author = author;
			this.text = text;
			this.date = date;
		}
		
		edit(text){
			this.text = text;
		}
	}
	
	class AttachedPostES6 extends PostES6{
		constructor(author, text, date){
			super(author, text, date);
			this.highlited = false;
		}
		
		makeTextHighlited(){
			this.highlited = true;
		}
	}
	
	let post3 = new PostES6('автор3', 'текст3', '13/01/21');
	console.log(post3);
	post3.edit('новый текст3');
	console.log(post3);
	
	let post4 = new AttachedPostES6('автор4', 'текст4', '28/11/21');
	console.log(post4);
	post4.edit('новый текст4');
	console.log(post4);
	post4.makeTextHighlited();
	console.log(post4);
}

fourth.onclick = function(){
	game.init();
}

fifth.onclick = function(){
	millionaire.init();
}

