'use strict';
const products = [
    {
        id: 0,
        title: "Product 1",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 28,
        img: 'img/catalog/catalog-image-1.png'
    },
    {
        id: 1,
        title: "Product 2",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 69,
        img: 'img/catalog/catalog-image-2.png'
    },
    {
        id: 2,
        title: "Product 3",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 73,
        img: 'img/catalog/catalog-image-3.png'
    },
    {
        id: 3,
        title: "Product 4",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 18,
        img: 'img/catalog/catalog-image-4.png'
    },
    {
        id: 4,
        title: "Product 5",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 41,
        img: 'img/catalog/catalog-image-5.png'
    },
    {
        id: 5,
        title: "Product 6",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 36,
        img: 'img/catalog/catalog-image-6.png'
    },
    {
        id: 6,
        title: "Product 7",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 25,
        img: 'img/catalog/catalog-image-7.png'
    },
    {
        id: 7,
        title: "Product 8",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 38,
        img: 'img/catalog/catalog-image-8.png'
    },
    {
        id: 8,
        title: "Product 9",
        description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 51,
        img: 'img/catalog/catalog-image-9.png'
    }
];
//Заполнение данных продуктов на странице данными из массива продуктов
let productsCosts = document.querySelectorAll('.featured-items-box-item-cost');
let productTitles = document.querySelectorAll('.featured-items-box-item-link')
productsCosts.forEach((cost, i) => {
	cost.textContent = `$${products[i].price}`;
});
productTitles.forEach((title, i) => {
	title.textContent = `${products[i].title}`;
});

//Количество товаров в корзине
let productCount = 0;
//Показывает и скрывает кружочек и число продуктов у иконки корзины
function changeProductCount(){
    document.querySelector('.menu-list-item-cart-icon-text').textContent = productCount;
    if (productCount > 0) {
        document.querySelector('.menu-list-item-cart-icon-contain').style.display = 'block';
        document.querySelector('.menu-list-item-cart-icon-text').style.display = 'block';
    } else {
        document.querySelector('.menu-list-item-cart-icon-contain').style.display = 'none';
        document.querySelector('.menu-list-item-cart-icon-text').style.display = 'none';
    };
}

//Класс элемента корзины
class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
		this.cart = document.createElement('table');
    }

    calcTotal() {
        this.totalPrice = 0;
        this.items.forEach(item => {
            this.totalPrice += item.totalPrice;
        });
		this.renderCart();
    }

    getMarkup() {
		this.cart.innerHTML = '';
		this.cart.classList.add('instance-cart');
		this.cart.insertAdjacentHTML('afterbegin', '<tr class="cartHeading"><th>Название</th><th>Количество</th><th>Цета</th><th>Итого</th></tr>');
		this.items.forEach(item => {
            this.cart.insertAdjacentElement('beforeend',item.getMarkup(item.productId));
        });
		this.cart.insertAdjacentHTML('beforeend', `<caption>Товаров на сумму $ ${this.totalPrice}</caption></table>`);
		return this.cart;
    }

    renderCart() {
		changeProductCount();
        if (document.querySelector('.instance-cart')) {
            document.querySelector('.instance-cart').remove();
        };
        document.body.insertAdjacentElement('afterbegin', this.getMarkup());
    }

    addItem(product, i) {
        let isExist = false;
        this.items.forEach(item => {
            if (item.productId === product.id) {
                isExist = true;
                item.addItem();
            }
        });
        if (!isExist) {
            this.items.push(new CartItem(products[i].id, products[i].title, products[i].price));
			productCount++;
        }
        this.calcTotal();
    }
	
	removeItem(id){
		productCount--;
		this.items.forEach((item, i) => {
			if (item.productId === id){
				this.items.splice(i, 1);
			}
		});
		this.calcTotal();
	};
}

class CartItem {
    constructor(productId, productName, productPrice) {
        this.productId = productId;
        this.productName = productName;
        this.productCount = 1;
        this.productPrice = productPrice;
        this.totalPrice = 0;
        this.calcTotal();
    }

    calcTotal() {
        this.totalPrice = this.productCount * this.productPrice;
		myCart.calcTotal();
    }

    addItem() {
		productCount++;
        this.productCount++;
        this.calcTotal();
    }

    removeItem() {
		if ((this.productCount - 1) === 0){
			myCart.removeItem(this.productId);
		} else {
			productCount--;
			this.productCount--;
			this.calcTotal();
		}
		
    }
	//Здесть пришлось сделать сложно, с созданием DOM-элементов
	//и навешиванием на них обработчиков, чтобы работали кнопки + и -
	//Начальный вариант был с возвращением из метода строки с разметкой товара
    getMarkup(id) {
        let product = document.createElement('tr');
		let productName = document.createElement('td');
		let productCount = document.createElement('td');
		let productPrice = document.createElement('td');
		let productTotalPrice = document.createElement('td');
		let addItem = document.createElement('button');
		let removeItem = document.createElement('button');
		product.classList.add(`productId${id}`);
		productName.textContent = this.productName;
		productCount.textContent = `${this.productCount} `;
		productPrice.textContent = `$ ${this.productPrice}`;
		productTotalPrice.textContent = `$ ${this.totalPrice}`;
		addItem.textContent = '+';
		addItem.classList.add('addItem');
		removeItem.textContent = '-';
		removeItem.classList.add('removeItem');
		addItem.addEventListener('click', () => {
			this.addItem();
		});
		removeItem.addEventListener('click', () => {
			this.removeItem();
		});
		productCount.insertAdjacentElement('beforeend', addItem);
		productCount.insertAdjacentElement('beforeend', removeItem);
		product.insertAdjacentElement('beforeend',productName);
		product.insertAdjacentElement('beforeend',productCount);
		product.insertAdjacentElement('beforeend',productPrice);
		product.insertAdjacentElement('beforeend',productTotalPrice);
		return product;
    }
}

let myCart = new Cart;

//Отыскивает кнопки добавить в корзину у всех товаров и навешивает на них обработчик
let addTocartButton = document.querySelectorAll('.addtocart-button');
addTocartButton.forEach((button, i) => {
    button.addEventListener('click', function () {
        myCart.addItem(products[i], i);
        myCart.renderCart();
    })
});

//Скрывает и показывает табличку с товарами в корзине
let cartButton = document.querySelector('.menu-list-item-cart');
cartButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!document.querySelector('.instance-cart')) {
        myCart.renderCart();
    } else {
        document.querySelector('.instance-cart').remove()
    }
});