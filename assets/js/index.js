document.addEventListener('DOMContentLoaded', function() {
    let countProductsValue = 0,
        countProducts = function() {
       let addProductButtons = document.querySelectorAll(".menu .item-menu .add-basket");
       // let addProductButtons = document.getElementsByClassName("add-basket");

           addProductButtons.forEach(item => {
           item.addEventListener("click", function() {

               if (countProductsValue + 1 > 10) {
                   alert("Sorry, we can go you only ten products!");
                   countProductsValue = 0;
               } else {
                   countProductsValue += 1;
               }

               console.log(countProductsValue);

               let countProductsValueElement = document.getElementById("countProductsValue");
               countProductsValueElement.innerHTML = countProductsValue;
           });
       });
   };

   countProducts();
});