//Initialization constants
const removeBasketClassName = "remove-basket";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

document.addEventListener('DOMContentLoaded', function() {
    getProducts();
});

let countProductsValue = 0,
    clickProducts = function() {
        let productButtons = document.querySelectorAll(".menu .item-menu button");

        productButtons.forEach(item => {
            item.addEventListener("click", function() {

                if (item.classList.contains(removeBasketClassName)) {
                    removeProduct(item);
                } else {
                    addProduct(item);
                }

                item.classList.toggle(removeBasketClassName);

                if (countProductsValue > 10) {
                    alert("Sorry, we can go you only ten products!");
                    countProductsValue = 0;
                }
                if (countProductsValue < 0) {
                    alert("Продуктов не может быть меньше 0!");
                    countProductsValue = 0;
                }

                let countProductsValueElement = document.getElementById("countProductsValue");
                countProductsValueElement.innerHTML = countProductsValue;
            });
        });
    };

let addProduct = function(item) {
        item.innerHTML = "Убрать";
        countProductsValue += 1;
    },
    removeProduct = function(item) {
        item.innerHTML = "Добавить";
        countProductsValue -= 1;
    };

let getProducts = async function() {
    let response = await fetch(apiUrl);

    if (response.ok) {
        let products = await response.json();
        products.forEach((item, index) => {
            if (index < 6) {
                showProduct(item);
            }
        });

        clickProducts();
    } else {
        console.log("Не удалось получить данные с сервера, код ошибки: " + response.status);
    }
};

let showProduct = function(item) {
    console.log(item.title);

    let itemMenuDiv = document.createElement("div");
    itemMenuDiv.classList = "item-menu";

    let itemMenuTitleDiv = document.createElement("div");
    itemMenuTitleDiv.classList = "item-menu-title";
    itemMenuTitleDiv.innerHTML = item.title.slice(0, 5);

    let itemMenuImg = document.createElement("img");
    itemMenuImg.src = "assets/images/imageFood.jpg";

    let itemMenuPriceDiv = document.createElement("div");
    itemMenuPriceDiv.classList = "item-menu-price";

    let addBasketButton = document.createElement("button");
    addBasketButton.classList = "add-basket";
    addBasketButton.innerHTML = "Добавить";

    itemMenuDiv.append(itemMenuTitleDiv, itemMenuImg, itemMenuPriceDiv, addBasketButton);
    document.getElementById("menu").append(itemMenuDiv);
}