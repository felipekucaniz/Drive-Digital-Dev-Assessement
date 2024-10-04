# Shopify Developer Assessment

Link to the Shopify preview = https://quickstart-2a6b05f1.myshopify.com/
Preview access password = ohltay
Link to your repository = https://github.com/felipekucaniz/Drive-Digital-Dev-Assessement.git

## Section 1 - Hero:
2 different images for desktop and mobile
Client configurable overlay for better text readability

## Section 2 - Feature Product:
Quantity input and variant select included
Native Shopify "Add to Cart" form
Button text changes when product/variant is already in cart or sold out
Product price changes when a variant change

## Section 2.1 - Featured Product Information:
Product material metafield added to products
Products with metafield assigned: the-complete-snowboard, the-compare-at-price-snowboard, the-out-of-stock-snowboard

# Instructions for testing:
Run the following command in terminal (make sure you have Shopify CLI installed https://shopify.dev/docs/api/shopify-cli):
shopify theme dev --store quickstart-2a6b05f1.myshopify.com
When asked for password use the preview access password “ohltay”

Change product value in /templates/index.json to one of the following values: "the-complete-snowboard", "the-compare-at-price-snowboard", "the-out-of-stock-snowboard"
{
  "sections": {
    "featured_product": {
      "settings": {
        "product": "the-complete-snowboard"
      }
    }
  }
}

"the-complete-snowboard”: You can test and play with variants with different prices

"the-compare-at-price-snowboard”: You can check the product price and discount

"the-out-of-stock-snowboard”: You can check a sold out product

## Evaluation Criteria

- Attention to detail
- Knowledge of Shopify
- Mastery of HTML semantics, accessibility, and search engine optimization
- Mastery of CSS/SCSS
- Responsive design skills
- Ability to convert designs and requirements into functional code
 
## How to Submit

After finishing, kindly submit the following items through email:

- Link to the Shopify preview = https://quickstart-2a6b05f1.myshopify.com/
- Preview access password = ohltay
- Link to your repository = https://github.com/felipekucaniz/Drive-Digital-Dev-Assessement.git

## Steps to Follow

1. Clone the project repository
2. Implement the designs found in the /Design folder or view them in [Figma](https://www.figma.com/file/efeh3dqcgKIE9156w4OGQ5/Shopify-Developer-Assessment?type=design&node-id=1%3A6&mode=dev&t=ZkV3x9FDw9eSZCLG-1) to incorporate them into your theme. This includes creating a header, footer, and customising two distinct sections.
3. Include all necessary instructions for testing, along with any relevant documentation, in your README.md file

### Notes
- Your focus will be solely on the homepage.
- Please refer to this [link](https://www.shopify.com/au/brand-assets) to download the Shopify logo

## What you'll need

- CSS/SCSS
- JS
  - Using any JS framework is also allowed
- Fonts
    - Poppins
    - Montserrat

## Section 1 - Hero

- Images used are Shopify stock images. Please refer to [this link](https://www.shopify.com/stock-photos):
  - hands-hold-paint-items-over-a-pallet.jpg
  - photographer-working-at-his-desk.jpg
- Providing a mobile-specific image is not mandatory; you can use a cropped portrait variation of the desktop image instead.

#### Optional
- Structure the text elements as blocks to allow for rearrangement
- Consider incorporating additional configurable features that might appeal to clients.

- Image overlay added for readability

## Section 2 - Feature Product

- A predefined schema exists within the section. Please update the code to display the following:
  - Product title
  - Price with discount
  - Product description limited to a maximum of 55 words; add an ellipsis if it exceeds the maximum word count.
  - Product tags
- Implement the "add to cart" functionality using one of the following methods:
  - [Ajax Cart API](https://shopify.dev/docs/api/ajax/reference/cart)
  - Native Shopify "Add to Cart" form
- After a product is added to the cart, the button should change to "Added to Cart."
- The cart icon in the header should also update the no. indicator

### Optional
- Include a quantity input field
- Enable variant selection
- Change the "add to cart" button to "Sold Out" when the product is unavailable.

- Select input for variants
- Quantity as a regular input type number

### Tip
- You can clear your cart by visiting **/cart/clear**

## Section 2.1 - Featured Product Information

- Create a metafield for the product material, noting that the material is unique to each product.
- Delivery information should be set globally

- Products with metafield assigned: the-complete-snowboard, the-compare-at-price-snowboard, the-out-of-stock-snowboard

### END

"The only way to do great work is to love what you do. – Steve Jobs"

As you embark on this assessment, remember that passion is the key to excellence. Let your love for what you do shine through your work. Best wishes!
