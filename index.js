$("#prev-btn").click(prevImage)

$("#next-btn").click(nextImage)

function prevImage(){
    var active = $(".active")
    var prev = active.prev()

    if(prev.length <= 0){
        // dari awal ke akhir
        prev = $(".slider").last()
        $('.slider-content').animate({
            left:"-200vw",
        })
    }else{
        // ke image sebelumnya
        $('.slider-content').animate({
            left:"+=100vw",
        })
    }

    active.removeClass("active")
    prev.addClass("active")

}

function nextImage(){
    var active = $(".active")
    var next = active.next()

    if(next.length <= 0){
        // dari awal ke akhir
        next = $(".slider").first()
        $('.slider-content').animate({
            left:"0vw",
        })
    }else{
        // ke image sebelumnya
        $('.slider-content').animate({
            left:"-=100vw",
        })
    }

    active.removeClass("active")
    next.addClass("active")

}

let carts = document.querySelectorAll('.add-cart');

let flag1 = document.querySelector
(".container-shoes");
let flag2 = document.querySelector
(".container-acc");

let products = [];

if(flag1){
    products =[
        {
            name: 'Jordan Delta 3',
            tag: 'shoePage1',
            price: 200000,
            inCart: 0
        },
        {
            name: 'Nike Victori Two',
            tag: 'shoePage2',
            price: 200000,
            inCart: 0
        },
        {
            name: 'ACG Deschutz',
            tag: 'shoePage3',
            price: 300000,
            inCart: 0
        },
        {
            name: 'Air Min 96',
            tag: 'shoePage4',
            price: 400000,
            inCart: 0
        },
        {
            name: 'Blazer high 91 vintage',
            tag: 'shoePage5',
            price: 500000,
            inCart: 0
        },
        {
            name: 'PK 102 EF',
            tag: 'shoePage6',
            price: 200000,
            inCart: 0
        },
        {
            name: 'Min Impact 100',
            tag: 'shoePage7',
            price: 200000,
            inCart: 0
        },
        {
            name: 'Kyrie 10 by me',
            tag: 'shoePage9',
            price: 300000,
            inCart: 0
        },
        {
            name: 'Low x mirmi 19',
            tag: 'shoePage9',
            price: 400000,
            inCart: 0
        },
        {
            name: 'Precision 20',
            tag: 'shoePage10',
            price: 500000,
            inCart: 0
        }
    ];
    console.log("shoes");
}else if(flag2){
    products =[
        {
            name: 'TAF VORTEX blue',
            tag: 'acc1',
            price: 125000,
            inCart: 0
        },
        {
            name: 'TAF VORTEX pink',
            tag: 'acc2',
            price: 125000,
            inCart: 0
        },
        {
            name: 'Sports Watch coppper',
            tag: 'acc3',
            price: 900000,
            inCart: 0
        },
        {
            name: 'Sports Watch Grey',
            tag: 'acc4',
            price: 850000,
            inCart: 0
        },
        {
            name: 'Shoe spray',
            tag: 'acc5',
            price: 75000,
            inCart: 0
        },
        {
            name: 'Face mask blue',
            tag: 'acc6',
            price: 50000,
            inCart: 0
        },
        {
            name: 'functional mask black',
            tag: 'acc7',
            price: 100000,
            inCart: 0
        },
        {
            name: 'functional mask navy',
            tag: 'acc8',
            price: 100000,
            inCart: 0
        },
        {
            name: 'Headlamp blue',
            tag: 'acc9',
            price: 99000,
            inCart: 0
        },
        {
            name: 'Foot Comfort',
            tag: 'acc10',
            price: 35000,
            inCart: 0
        }
    ];
    console.log("acc");
}else{
    products =[
        {
            name: 'ZX 8000',
            tag: 'new1',
            price: 200000,
            inCart: 0
        },
        {
            name: 'HU NMB 39',
            tag: 'new2',
            price: 200000,
            inCart: 0
        },
        {
            name: 'UltraBoost 3.0',
            tag: 'new3',
            price: 300000,
            inCart: 0
        },
        {
            name: 'Type 5-8',
            tag: 'new4',
            price: 400000,
            inCart: 0
        },
        {
            name: 'Falcon 4.0',
            tag: 'new5',
            price: 500000,
            inCart: 0
        },
        {
            name: 'ADIDAS NI BOS',
            tag: 'hot1',
            price: 200000,
            inCart: 0
        },
        {
            name: 'Ventice 5.8',
            tag: 'hot2',
            price: 200000,
            inCart: 0
        },
        {
            name: 'Response Run',
            tag: 'hot3',
            price: 300000,
            inCart: 0
        },
        {
            name: 'Fluid Street',
            tag: 'hot4',
            price: 400000,
            inCart: 0
        },
        {
            name: 'Pure Motion 119',
            tag: 'hot5',
            price: 500000,
            inCart: 0
        }
    ];
    console.log("main");
}

for(let i = 0; i< carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.scart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.scart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.scart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }
    }
    

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="items">
                <div class="product">
                    <img src="${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>
                <div class="price">Rp. ${item.price},00</div>
                <div class="quantity">
                    <span>${item.inCart}</span>
                </div>
                <div class ="total">
                    Rp. ${item.inCart * item.price},00
                </div>
            </div>
            `
        });
        productContainer.innerHTML += `
        <div class ="cartTotalContainer">
            <h4 class="cartTotalTitle">
                Cart Total
            </h4>
            <h4 class="cartTotal">
                Rp. ${cartCost},00
            </h4>
        </div>
        `
        productContainer.innerHTML += `
        <div class="purchasebtn">
            <a href="checkout.html">
                <button>PURCHASE NOW!</button>
            </a>
        </div>
        `
    }else{
        productContainer.innerHTML += `
        <div class="empty">
            <p>Your cart seems empty</p>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();