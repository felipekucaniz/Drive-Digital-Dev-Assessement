document.addEventListener('DOMContentLoaded', () => {
  var variantSelector = document.querySelector("select[name='id']");
  variantSelector.addEventListener('change', function () {
    var cartContents = fetch(window.Shopify.routes.root + 'cart.js')
      .then((response) => response.json())
      .then((data) => {
        for (i = 0; i < data.items.length; i++) {
          if (data.items[i].id == variantSelector.value) {
            if (document.querySelector("button[name='add']").innerText == 'Add to Cart') {
              document.querySelector("button[name='add']").innerText = 'Added to Cart';
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
