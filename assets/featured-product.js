document.addEventListener('DOMContentLoaded', () => {
  var variantSelector = document.querySelector("select[name='id']");
  variantSelector.addEventListener('change', function () {
    // Update DOM price element
    // console.log(variantSelector.options[variantSelector.selectedIndex].dataset.price);
    document.getElementById('price-tag').innerText =
      variantSelector.options[variantSelector.selectedIndex].dataset.price;
  });
});
