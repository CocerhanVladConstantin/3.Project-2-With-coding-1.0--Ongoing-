let openShopping = document.querySelector('.shopping-cart');
let closeShopping = document.querySelector('.closeShopping');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let productsAll = [
    {
        id: 0,
        name: 'Hanorac cu buzunar kangaroo, Negru, 110-116 CM',
        image: '1H.png',
        price: 420.69,
        href: '/products/hanorac1.html'
    },
    {
        id: 1,
        name: 'Hanorac2',
        image: '1H.png',
        price: 2,
        href: '/products/hanorac2.html'
    },
    {
        id: 2,
        name: 'Hanorac3',
        image: '1H.png',
        price: 3,
        href: '/products/hanorac3.html'
    },
    {
        id: 3,
        name: 'Hanorac4',
        image: '1H.png',
        price: 4,
        href: '/products/hanorac4.html'
    },
    {
        id: 4,
        name: 'Hanorac5',
        image: '1H.png',
        price: 5,
        href: '/products/hanorac5.html'
    },
    {
        id: 5,
        name: 'Hanorac6',
        image: '1H.png',
        price: 6,
        href: '/products/hanorac6.html'
    },
    {
        id: 6,
        name: 'Hanorac7',
        image: '1H.png',
        price: 7,
        href: '/products/hanorac7.html'
    },
    {
        id: 7,
        name: 'Hanorac8',
        image: '1H.png',
        price: 8,
        href: '/products/hanorac8.html'
    },
    {
        id: 8,
        name: 'Hanorac9',
        image: '1H.png',
        price: 9,
        href: '/products/hanorac9.html'
    },
    {
        id: 9,
        name: 'Hanorac10',
        image: '1H.png',
        price: 10,
        href: '/products/hanorac10.html'
    },
    {
        id: 10,
        name: 'Bluza1',
        image: '1B.png',
        price: 1,
        href: '/products/bluza1.html'
    },
    {
        id: 11,
        name: 'Bluza2',
        image: '1B.png',
        price: 2,
        href: '/products/bluza2.html'
    },
    {
        id: 12,
        name: 'Bluza3',
        image: '1B.png',
        price: 3,
        href: '/products/bluza3.html'
    },
    {
        id: 13,
        name: 'Bluza4',
        image: '1B.png',
        price: 4,
        href: '/products/bluza4.html'
    },
    {
        id: 14,
        name: 'Bluza5',
        image: '1B.png',
        price: 5,
        href: '/products/bluza5.html'
    },
    {
        id: 15,
        name: 'Bluza6',
        image: '1B.png',
        price: 6,
        href: '/products/bluza6.html'
    },
    {
        id: 16,
        name: 'Bluza7',
        image: '1B.png',
        price: 7,
        href: '/products/bluza7.html'
    },
    {
        id: 17,
        name: 'Bluza8',
        image: '1B.png',
        price: 8,
        href: '/products/bluza8.html'
    },
    {
        id: 18,
        name: 'Bluza9',
        image: '1B.png',
        price: 9,
        href: '/products/bluza9.html'
    },
    {
        id: 19,
        name: 'Bluza10',
        image: '1B.png',
        price: 10,
        href: '/products/bluza10.html'
    },
    {
        id: 20,
        name: 'Tricou1',
        image: '1T.png',
        price: 1,
        href: '/products/tricou1.html'
    },
    {
        id: 21,
        name: 'Tricou2',
        image: '1T.png',
        price: 2,
        href: '/products/tricou2.html'
    },
    {
        id: 22,
        name: 'Tricou3',
        image: '1T.png',
        price: 3,
        href: '/products/tricou3.html'
    },
    {
        id: 23,
        name: 'Tricou4',
        image: '1T.png',
        price: 4,
        href: '/products/tricou4.html'
    },
    {
        id: 24,
        name: 'Tricou5',
        image: '1T.png',
        price: 5,
        href: '/products/tricou5.html'
    },
    {
        id: 25,
        name: 'Tricou6',
        image: '1T.png',
        price: 6,
        href: '/products/tricou6.html'
    },
    {
        id: 26,
        name: 'Tricou7',
        image: '1T.png',
        price: 7,
        href: '/products/tricou7.html'
    },
    {
        id: 27,
        name: 'Tricou8',
        image: '1T.png',
        price: 8,
        href: '/products/tricou8.html'
    },
    {
        id: 28,
        name: 'Tricou9',
        image: '1T.png',
        price: 9,
        href: '/products/tricou9.html'
    },
    {
        id: 29,
        name: 'Tricou10',
        image: '1T.png',
        price: 10,
        href: '/products/tricou10.html'
    },
    {
        id: 30,
        name: 'Sapca1',
        image: '1S.png',
        price: 1,
        href: '/products/sapca1.html'
    },
    {
        id: 31,
        name: 'Sapca2',
        image: '1S.png',
        price: 2,
        href: '/products/sapca2.html'
    },
    {
        id: 32,
        name: 'Sapca3',
        image: '1S.png',
        price: 3,
        href: '/products/sapca3.html'
    },
    {
        id: 33,
        name: 'Sapca4',
        image: '1S.png',
        price: 4,
        href: '/products/sapca4.html'
    },
    {
        id: 34,
        name: 'Sapca5',
        image: '1S.png',
        price: 5,
        href: '/products/sapca5.html'
    },
    {
        id: 35,
        name: 'Sapca6',
        image: '1S.png',
        price: 6,
        href: '/products/sapca6.html'
    },
    {
        id: 36,
        name: 'Sapca7',
        image: '1S.png',
        price: 7,
        href: '/products/sapca7.html'
    },
    {
        id: 37,
        name: 'Sapca8',
        image: '1S.png',
        price: 8,
        href: '/products/sapca8.html'
    },
    {
        id: 38,
        name: 'Sapca9',
        image: '1S.png',
        price: 9,
        href: '/products/sapca9.html'
    },
    {
        id: 39,
        name: 'Sapca10',
        image: '1S.png',
        price: 10,
        href: '/products/sapca10.html'
    },
    {
        id: 40,
        name: 'Stikere1',
        image: '1ST.png',
        price: 1,
        href: '/products/stikere1.html'
    },
    {
        id: 41,
        name: 'Stikere2',
        image: '1ST.png',
        price: 2,
        href: '/products/stikere2.html'
    },
    {
        id: 42,
        name: 'Stikere3',
        image: '1ST.png',
        price: 3,
        href: '/products/stikere3.html'
    },
    {
        id: 43,
        name: 'Stikere4',
        image: '1ST.png',
        price: 4,
        href: '/products/stikere4.html'
    },
    {
        id: 44,
        name: 'Stikere5',
        image: '1ST.png',
        price: 5,
        href: '/products/stikere5.html'
    },
    {
        id: 45,
        name: 'Stikere6',
        image: '1ST.png',
        price: 6,
        href: '/products/stikere6.html'
    },
    {
        id: 46,
        name: 'Stikere7',
        image: '1ST.png',
        price: 7,
        href: '/products/stikere7.html'
    },
    {
        id: 47,
        name: 'Stikere8',
        image: '1ST.png',
        price: 8,
        href: '/products/stikere8.html'
    },
    {
        id: 48,
        name: 'Stikere9',
        image: '1ST.png',
        price: 9,
        href: '/products/stikere9.html'
    },
    {
        id: 49,
        name: 'Stikere10',
        image: '1ST.png',
        price: 10,
        href: '/products/stikere10.html'
    }
];

let listCartProducts  = [];

// add to cart

function addToCart(id){
    let productIndex = productsAll.findIndex(p => p.id === id);
    if(listCartProducts[productIndex] == null){
        listCartProducts[productIndex] = JSON.parse(JSON.stringify(productsAll[productIndex]));
        listCartProducts[productIndex].quantity = 1;
        listCartProducts[productIndex].originalPrice = productsAll[productIndex].price;
    } else {
        listCartProducts[productIndex].quantity++;
    }
    reloadCart();
};

// cart list 

function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCartProducts.forEach((value, key)=>{
    totalPrice += value.originalPrice * value.quantity;
    count += value.quantity;
    if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div class="cart-product-thumbnail"><a href="${value.href}"><img src="/Images/${value.image}"/></a></div>
                <div class="cart-product-name"><a href="${value.href}">${value.name}</a></div>
                <button class="delete-product" title="Elimina produsul" onclick="deleteProduct(${key})"><i class="fa-solid fa-trash fa-2x"></i></button>
                <div class="cart-product-price">${(value.originalPrice).toLocaleString()}<span>Lei</span>
                </div>
                <div class="cart-product-quantity">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCart.appendChild(newDiv);
        }
    });
    total.innerHTML = `<span class="total-title">Total:</span><span class="total-amount">${totalPrice.toLocaleString()}</span><span class="total-currency">Lei</span>`;
    quantity.innerText = count;
};

//change quantity in cart

function changeQuantity(key, quantity) {
  if (quantity === 0) {
    delete listCartProducts[key];
  } else {
    const product = listCartProducts[key];
    const originalPrice = productsAll[key].price;
    product.quantity = quantity;
    product.price = originalPrice * quantity;
  }
  reloadCart();
};

//delete product in cart

function deleteProduct(key) {
    delete listCartProducts[key];
    reloadCart();
};

//left and right buttons products list main page

const productContainers = [...document.querySelectorAll('.small-products-list-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

// Search bar

const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const productList = document.getElementById("products-list");
  const products = productList.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getElementsByTagName("h3")[0].textContent.toUpperCase();
    
    if (productName.includes(searchBox)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
};

//Image tracker main page

const track = document.getElementById("image-track");

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const dragStart = (event) => {
  startPosition = getPositionX(event);
  prevTranslate = currentTranslate;
  isDragging = true;
};

const dragMove = (event) => {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    const distance = (currentPosition - startPosition) * 1.5; // increase drag distance by a factor of 1.5
    currentTranslate = prevTranslate + distance;
    setTranslate(currentTranslate);
  }
};

const dragEnd = () => {
  isDragging = false;
  track.dataset.prevPercentage = track.dataset.percentage;
};

const getPositionX = (event) => {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
};

const setTranslate = (translate) => {
  translate = Math.min(0, Math.max(translate, -(track.offsetWidth - track.parentNode.offsetWidth)));
  track.style.transform = `translateX(${translate}px)`;
  for (const image of track.getElementsByClassName("image")) {
    const objectPosition = 100 + (translate / track.offsetWidth * 100);
    image.style.objectPosition = `${objectPosition}% center`;
  }
};

track.addEventListener('mousedown', dragStart);
track.addEventListener('touchstart', dragStart);
track.addEventListener('mousemove', dragMove);
track.addEventListener('touchmove', dragMove);
track.addEventListener('mouseup', dragEnd);
track.addEventListener('touchend', dragEnd);
track.addEventListener('mouseleave', dragEnd);
