const localStorage = window.localStorage;
const cart_btn = document.getElementsByClassName("addToCartBtn")
const delete_btn = document.getElementsByClassName("delete")

eventListeners();

function eventListeners() {
    window.addEventListener("load", function () {
        let page = this.window.location.pathname;
        if (page == '/cart.html') FillDetailTable();

        for (let i = 0; i < cart_btn.length; i++) cart_btn[i].addEventListener("click", AddCart);
    })
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
        total_price: (price * count).toFixed(2),
    }

    AddCartsToStorage(cart);
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
    FillDetailTable();
    totalPrice();
}

function DeleteCartFromStorage(id) {
    let carts = GetCartsFromStorage();
    carts.splice(id, 1);
    localStorage.setItem("carts", JSON.stringify(carts));
    FillDetailTable();
}

function FillDetailTable() {
    let html = '';
    let carts = GetCartsFromStorage();

    for (let i = 0; i < carts.length; i++) {
        html += '<div class="main"><div class="row"><div class="col-lg-4 col-md-4 col-sm-12 col-12 product"><div class="image"><img src=' + carts[i].product_image + ' alt=""/><div class="title"><h5>' + carts[i].product_name + '</h5></div></div></div><div class="responsive-name  mt-3"><h5>' + carts[i].product_name + '</h5></div><div class="col-lg-2 col-md-2 col-sm-12 col-12 price"><h5 class="first-responsive">$<span>' + carts[i].product_price + '</span></h5><h5 class="second-responsive">Price: $<span>' + carts[i].product_price + '</span> </h5></div><div class="col-lg-2 col-md-2 col-sm-12 col-12 quantity"><h5 class="first-responsive">' + carts[i].product_count + '</h5><h5 class="second-responsive">Quantity: <span>' + carts[i].product_count + '</span></h5></div><div class="col-lg-2 col-md-2 col-sm-12 col-12 total"><h5 class="first-responsive">$<span>' + carts[i].total_price + '</span></h5><h5 class="second-responsive">Total Price: $<span>' + carts[i].total_price + '</span></h5></div><div class="col-lg-2 col-md-2 col-sm-12 col-12 delete"><i class="fa-solid fa-trash delete" onclick="DeleteCartFromStorage(' + i + ')"></i></div></div></div>'
        document.getElementById('selected-products').innerHTML = html
    }

    let total_all_price = '';
    total_all_price = '0'
    document.getElementById('all-price-total').innerText = total_all_price;
}