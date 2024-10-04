document.addEventListener('DOMContentLoaded', () => {
  var variantSelector = document.querySelector("select[name='id']");
  variantSelector.addEventListener('change', function () {
    var cartContents = fetch(window.Shopify.routes.root + 'cart.js')
      .then((response) => response.json())
      .then((data) => {
        for (i = 0; i < data.items.length; i++) {
          if (data.items[i].id == variantSelector.value) {
            console.log(document.querySelector("button[name='add']").innerText);
            if (document.querySelector("button[name='add']").innerText == 'ADD TO CART') {
              document.querySelector("button[name='add']").innerText = 'ADDED TO CART';
            }
          }
        }
      });
    // console.log(cartContents);
    // Update DOM price element
    // console.log(variantSelector.options[variantSelector.selectedIndex].dataset.price);
    document.getElementById('price-tag').innerText =
      variantSelector.options[variantSelector.selectedIndex].dataset.price;
  });
});
