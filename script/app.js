let products = [
    {
       id: 1,
       name: 'Crazy',
       price: 31000,
       img: 'images/products/burger-1.png',
       quantity: 0,
       get totalSum() {
            return this.price * this.quantity
       }
    },
    {
       id: 2,
       name: 'Light',
       price: 26000,
       img: 'images/products/burger-2.png',
       quantity: 0,
       get totalSum() {
            return this.price * this.quantity
       }
    },
    {
       id: 3,
       name: 'CheeseBurger',
       price: 29000,
       img: 'images/products/burger-3.png',
       quantity: 0,
       get totalSum() {
            return this.price * this.quantity
       }
    },
    {
       id: 4,
       name: 'dBurger',
       price: 24000,
       img: 'images/products/burger-4.png',
       quantity: 0,
       get totalSum() {
            return this.price * this.quantity
       }
    },
    {
       id: 5,
       name: 'Javascript burger',
       price: 44000,
       img: 'https://avatars.mds.yandex.net/i?id=a12252e6bc03e7a1aea9916b613f90e8bbab0397aa9dc105-5322671-images-thumbs&n=13',
       quantity: 0,
       get totalSum() {
            return this.price * this.quantity
       }
    },
]

const wrapperList = document.querySelector('.wrapper__list')

// outBurgers() - будет перебирать массив products и выводить бургеры внутри wrapperList 
function outBurgers() {
    
    products.forEach((item) => {
       let {id, name, price, img} = item
       
       wrapperList.innerHTML += `<div class="wrapper__list-card" id="${id}">
       <p class="wrapper__list-count"></p>
       <img class="wrapper__list-image" src="${img}" alt="">
       <h3 class="wrapper__list-title">${name}</h3>
       <div class="wrapper__list-sub">
           <p class="wrapper__list-text">${price} сум</p>
           <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
       </div>
   </div>`
    })
}
outBurgers()


const   burgerBtns = document.querySelectorAll('.wrapper__list-btn'),
        cartBtn    = document.querySelector('.wrapper__navbar-btn'),
        cartClose  = document.querySelector('.wrapper__navbar-close'),
        basket     = document.querySelector('.wrapper__navbar-basket');
        
cartBtn.addEventListener('click', () => basket.classList.add('active'))
cartClose.addEventListener('click', () => basket.classList.remove('active'))


burgerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        addQuantity(btn)
    })
})

// addQuantity() добавляет кол-во указаному бургеру
function addQuantity(btn) {
   // closest() - метод который подключается к ближайшему указанному родителю
    let id = btn.closest('.wrapper__list-card').getAttribute('id')
    let burger = products.find((item) => item.id == id)
    burger.quantity < 10 ?  burger.quantity++ : alert('Слишком много')
    console.log(burger);
}

let i = 0, 
    h1 = document.querySelector('.title');

let interval = setInterval(() => { 
    h1.innerHTML = i++; 
    if(i > 100) { 
        clearInterval(interval); h1.innerHTML = "100 lvl"; h1.style.fontSize = "4em"; }
     }, 50);