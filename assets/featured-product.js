document.addEventListener('DOMContentLoaded', () => {
  var variantSelector = document.querySelector("select[name='id']");
  variantSelector.addEventListener('change', function () {
    // Update DOM button text element whether item is in cart
    var cartContents = fetch(window.Shopify.routes.root + 'cart.js')
      .then((response) => response.json())
      .then((data) => {
        let inCart = false;
        for (i = 0; i < data.items.length; i++) {
          if (data.items[i].id == variantSelector.value) {
            inCart = true;
            break;
          }
        }
        if (inCart && document.querySelector("button[name='add']").innerText == 'ADD TO CART') {
          document.querySelector("button[name='add']").innerText = 'ADDED TO CART';
        } else if (!inCart && document.querySelector("button[name='add']").innerText == 'ADDED TO CART') {
          document.querySelector("button[name='add']").innerText = 'ADD TO CART';
        }
      });
    // console.log(cartContents);
    // Update DOM price element
    // console.log(variantSelector.options[variantSelector.selectedIndex].dataset.price);
    document.getElementById('price-tag').innerText =
      variantSelector.options[variantSelector.selectedIndex].dataset.price;
  });
});
