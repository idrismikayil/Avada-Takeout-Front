const localStorage = window.localStorage;
const cart_btn = document.getElementsByClassName("addToCartBtn")
// const delete_btn = document.getElementsByClassName("delete")

eventListeners();

function Console() {
    console.log("test-console")
}

function eventListeners() {
    window.addEventListener("load", function () {
        let page = this.window.location.pathname;
        if (page == '/cart.html') FillDetailTable();

        for (let i = 0; i < cart_btn.length; i++) cart_btn[i].addEventListener("click", AddCart);
    })
}

function Console() {
    console.log("test-console")
}

function AddCart(e) {

    let id = e.target.name;
    let price = parseFloat(document.getElementById("p-price-" + id).innerText)
    let count = parseInt(document.getElementById("p-count-" + id).value)
    let cart = {
        id: id,
        product_image: document.getElementById("p-img-" + id).getAttribute("src"),
        product_name: document.getElementById("p-name-" + id).innerText,
        product_price: price,
        product_count: count,
        total_price: price * count
    }

    AddCartsToStorage(cart);
    ShowAlert();
}

function GetCartsFromStorage() {
    let carts;

    if (localStorage.getItem("carts") === null) {
        carts = [];
    } else {
        carts = JSON.parse(localStorage.getItem("carts"));
    }
    return carts;
}

function AddCartsToStorage(data) {
    let carts = GetCartsFromStorage();
    carts.push(data);
    localStorage.setItem("carts", JSON.stringify(carts));
}

function DeleteCartFromStorage(id) {
    let carts = GetCartsFromStorage();

    carts.splice(id, 1);

    localStorage.setItem("carts", JSON.stringify(carts));
}

function ShowAlert() {
    $("#success-alert").show();
    setTimeout(function () {
        $("#success-alert").hide();
    }, 2000);
}

// function GetDetailPage(){
//     window.location.href='/cart.html';
// }

// function GetShoppingCartPage(){
//     window.location.href='/product-detail.html';
// }

document.getElementsByClassName('selected-products').innerHTML = "<p>+html+</p>";


function FillDetailTable() {
    let html = '';
    let carts = GetCartsFromStorage();

    for (let i = 0; i < carts.length; i++) {
        html += '<div class="main">'
        '<div class="row">'
        '<div class="col-lg-4 col-md-4 col-sm-12 col-12 product">'
        '<div class="image">'
        '<img src=' + carts[i].product_image + ' alt=""/>' +
            '<div class="title">'
        '<h5>' + carts[i].product_name + '</h5>' +
            '</div>'
        '</div>'
        '</div>'
        '<div class="responsive-name  mt-3">'
        '<h5>' + carts[i].product_name + '</h5>' +
            '</div>'
        '<div class="col-lg-2 col-md-2 col-sm-12 col-12 price">'
        '<h5 class="first-responsive">'
        '$<span>' + carts[i].product_price + '</span>' +
            '</h5>'
        '<h5 class="second-responsive">'
        'Price: $<span>' + carts[i].product_price + '</span>' +
            '</h5>'
        '</div>'
        '<div class="col-lg-2 col-md-2 col-sm-12 col-12 quantity">'
        '<h5 class="first-responsive">'
        '<span>' + carts[i].product_count + '</span>' +
            '</h5>'
        '<h5 class="second-responsive">'
        'Quantity: <span>' + carts[i].product_count + '</span>' +
            '</h5>'
        '</div>'
        '<div class="col-lg-2 col-md-2 col-sm-12 col-12 total">'
        '<h5 class="first-responsive">'
        '$<span>' + carts[i].total_price + '</span>' +
            '</h5>'
        '<h5 class="second-responsive">'
        'Total Price: $<span>' + carts[i].total_price + '</span>' +
            '</h5>'
        '</div>'
        '<div class="col-lg-2 col-md-2 col-sm-12 col-12 delete">' +
        '<i class="fa-solid fa-trash delete" onclick="DeleteCartFromStorage(' + i + ')">' +
            '</i>'
        '</div>'
        '</div>'
        '</div>'

        // document.getElementsByClassName('selected-products').innerHTML = html;
        // document.getElementsByClassName('all-price-total').innerText = ?
        console.log("test")
        document.getElementsByClassName('selected-products').innerHTML = "<p>+html+</p>";
    }
}

/* <div class="main">
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12 col-12 product">
        <div class="image">
            <img src="assets/img/avocado-toast.webp" alt=""/>
            <div class="title">
                <h5>
                    Avocado Smash Toast
                </h5>
            </div>
        </div>
    </div>
    <div class="responsive-name  mt-3">
        <h5>
            Avocado Smash Toast
        </h5>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-12 price">
        <h5 class="first-responsive">
            $<span>
                5.99
            </span>
        </h5>
        <h5 class="second-responsive">
            Price: $
            <span>
                5.99
            </span> 
        </h5>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-12 quantity">
        <h5 class="first-responsive">1</h5>
        <h5 class="second-responsive">Quantity: <span>1</span></h5>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-12 total">
        <h5 class="first-responsive">$<span>5.99</span></h5>
        <h5 class="second-responsive">Total Price: $<span>5.99</span></h5>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-12 delete">
        <i class="fa-solid fa-trash"></i>
    </div>
</div>
</div> */