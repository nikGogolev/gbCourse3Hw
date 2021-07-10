let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');
let sixth = document.querySelector('.sixth');

first.onclick = function () {
	for (let i = 0; i < 11; i++) {
		if (i === 0) {
			console.log(`${i} - это ноль`);
		} else if (i % 2 === 0) {
			console.log(`${i} - четное число`);
		} else {
			console.log(`${i} - нечетное число`);
		}
	}
}

second.onclick = function () {
	const post = {
		author: "John", //вывести этот текст
		postId: 23,
		comments: [
			{
				userId: 10,
				userName: "Alex",
				text: "lorem ipsum",
				rating: {
					likes: 10,
					dislikes: 2 //вывести это число
				}
			},
			{
				userId: 5, //вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", //вывести этот текст
				rating: {
					likes: 3,
					dislikes: 1
				}
			},
		]
	};

	console.log(post.author);

	console.log(post.comments[0].rating.dislikes);

	console.log(post.comments[1].userId);

	console.log(post.comments[1].text);
}

third.onclick = function () {
	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price: 1000,
		},
	];

	products.forEach((product) => {
		return product.price *= 0.85;
	});

	console.log(products);
}

fourth.onclick = function () {
	const products = [
		{
			id: 3,
			price: 127,
			photos: [
				"1.jpg",
				"2.jpg",
			]
		},
		{
			id: 5,
			price: 499,
			photos: []
		},
		{
			id: 10,
			price: 26,
			photos: [
				"3.jpg"
			]
		},
		{
			id: 8,
			price: 78,
		},
	];

	let productsWithPhoto = products.filter((product) => {
		return product.hasOwnProperty('photos') && product.photos.length > 0;
	});

	console.log(productsWithPhoto);

	products.sort((a, b) => {
		return a.price - b.price;
	});

	console.log(products);
}

fifth.onclick = function () {
	for (let i = 0; i < 10; console.log(i++));
}

sixth.onclick = function () {
	let row = '';
	for (let i = 0; i < 20; i++) {
		row += '*';
		console.log(row);
	}
}