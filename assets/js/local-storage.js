const localStorage = window.localStorage;
const cart_btn = document.getElementsByClassName("addToCartBtn")
const delete_btn = document.getElementsByClassName("delete")

eventListeners();

function eventListeners() {
    window.addEventListener("load", function () {
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
        total_price: price * count
    }

    // let existedProduct = cart.find((p) => p.Id = Id);
    // if (existedProduct == undefined) {
    //     let product = {
    //         id: id,
    //         product_image: document.getElementById("p-img-" + id).getAttribute("src"),
    //         product_name: document.getElementById("p-name-" + id).innerText,
    //         product_price: price,
    //         product_count: count,
    //         total_price: price * count
    //     };
    //     AddCartsToStorage(cart);
    //     ShowAlert();
    // }
    // else{
    //     existedProduct.count++;
    // }

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

function DeleteCartsFromStorage(id) {
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

