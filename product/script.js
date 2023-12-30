data = {
  "product": {
    "id": 6937548554342,
    "title": "Embrace Sideboard",
    "description": "The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and reliability.",
    "vendor": "Marmeto",
    "product_type": "Cloth",
    "price": "$12999",
    "compare_at_price": "$19999",
    "options": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          {
            "Yellow": "#ECDECC"
          },
          {
            "Green": "#BBD278"
          },
          {
            "Blue": "#BBC1F8"
          },
          {
            "Pink": "#FFD3F8"
          }
        ]
      },
      {
        "name": "Size",
        "position": 2,
        "values": [
          "Small",
          "Medium",
          "Large",
          "Extra large",
          "XXL"
        ]
      }
    ],
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-6Y2XstWtDvM-unsplash.jpg?v=1701946731"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-HVlOLCHlzJs-unsplash.jpg?v=1701946732"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-om8qxMDlGfI-unsplash.jpg?v=1701946732"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/laura-chouette-WQgvRkmqRrg-unsplash.jpg?v=1701946731"
      }
    ]
  }
}
console.log("Product title:", data.product.id);
console.log("Product description:", data.product.images);
const productImages = data.product.images;

const imageElement = document.querySelector('.image img');
imageElement.src = productImages[0].src;
imageElement.alt = "Embrace Sideboard";

const choiceElements = document.querySelectorAll('.Choice div');
const displayedImage = document.querySelector('.displayed img');

// Iterate through the choice elements and image data
for (let i = 0; i < choiceElements.length; i++) {
  const choiceElement = choiceElements[i];
  const imageElement = choiceElement.querySelector('img');

  imageElement.src = productImages[i].src;
  imageElement.alt = "Embrace Sideboard Image " + (i + 1); // Add descriptive alt text
}


choiceElements.forEach(choiceElement => {
  choiceElement.addEventListener('click', () => {
    const clickedImage = choiceElement.querySelector('img');
    displayedImage.src = clickedImage.src;
    displayedImage.alt = clickedImage.alt;
  });
});

// const productVendorElement = document.querySelector('.productVendor p');
// productVendorElement.textContent = data.product.vendor; // Get vendor from data and display it

// const productTitleElement= document.querySelector('.productTitle p');
// productTitleElement.textContent = data.product.title; // Get vendor from data and display it

function calculateDiscount(actualPrice, productPrice) {

  const numericActualPrice = parseFloat(actualPrice.replace('$', ''));
  const numericProductPrice = parseFloat(productPrice.replace('$', ''));

  if (isNaN(numericActualPrice) || isNaN(numericProductPrice)) {
    return 'Invalid input. Please provide valid numeric values with "$" sign.';
  }

  const discountAmount = numericActualPrice - numericProductPrice;
  const discountPercentage = (discountAmount / numericActualPrice) * 100;

  // Round the discount percentage to two decimal places
  const Percentage = Math.round(discountPercentage * 100) / 100;

  return String(Percentage)+"% off";
}


var actualPrice=data.product.compare_at_price;
var productPrice=data.product.price;

var discount=calculateDiscount("$4000","$40")


const productPriceElement = document.querySelector('.productPrice p');
productPriceElement.textContent = data.product.price+".00"; // Get vendor from data and display it


const actualPriceElement = document.querySelector('.actualPrice p');
actualPriceElement.textContent = data.product.compare_at_price +".00"; // Get vendor from data and display it

const discountElement = document.querySelector('.discount p');
discountElement.textContent = discount;





const colorElements = document.querySelectorAll('.color div');
const colorOptions = data.product.options.find(option => option.name === "Color").values;

colorOptions.forEach((colorOption, index) => {
  const colorElement = colorElements[index];
  const colorName = Object.keys(colorOption)[0]; // Get the color name (e.g., "Yellow")
  const colorHex = colorOption[colorName]; // Get the corresponding hex code

  colorElement.style.backgroundColor = colorHex; // Set the background color of the element
});

colorElements.forEach(colorElement => {
  colorElement.addEventListener('click', () => {
    // Remove existing borders and ticks
    colorElements.forEach(el => {
      el.style.border = 'none';
      el.textContent = '';
    });

    // Apply border, padding, and tick to the selected color
    colorElement.style.border = '2px solid';
    colorElement.style.borderColor = colorElement.style.backgroundColor;
    //   colorElement.style.padding = '5px'; // Add padding for the gap
    colorElement.style.boxShadow = "0 0 10px white";
    colorElement.style.textAlign = 'center';
    //   colorElement.style.border = '1px solid white';
    colorElement.style.color = 'white';
    colorElement.textContent = '✓';
  });
});

//   const sizeOptions = data.product.options.find(option => option.name === "Size").values;

//   const sizeContainer = document.querySelector(".ChooseSize");
//   const radioInputs = []; // Store radio inputs for later reference

//   sizeOptions.forEach(size => {
//     const radioDiv = document.createElement("div");
//     const radioInput = document.createElement("input");

//     radioInput.type = "radio";
//     radioInput.name = "size";
//     radioInput.value = size;

//     radioInputs.push(radioInput); // Add to the array

//     // Add event listener to toggle styles and reset previous state
//     radioInput.addEventListener("change", () => {
//       if (radioInput.checked) {
//         radioDiv.style.backgroundColor = "blue";
//         radioDiv.style.color = "white";

//         // Reset the previous checked radio button
//         radioInputs.forEach(input => {
//           if (input !== radioInput) {
//             // console.log(input,radioInput)
//             console.log(input.style.backgroundColor)
//             input.style.backgroundColor = "gray";
//             input.style.color = "black";
//             input.checked = false; // Uncheck the previous one
//           }
//         });
//       }
//     });

//     // Create and append the label
//     const label = document.createElement("label");
//     label.textContent = size;
//     label.htmlFor = radioInput.id;
//     radioDiv.appendChild(label);

//     radioDiv.appendChild(radioInput);
//     sizeContainer.appendChild(radioDiv);
//   });




const sizeOptions = data.product.options.find(option => option.name === "Size").values;

const sizeContainer = document.querySelector(".ChooseSize");



const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const quantityValue = document.querySelector("#quantity-value");
let currentQuantity = 1; // Initialize quantity

minusButton.addEventListener("click", () => {
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityValue.textContent = currentQuantity;
  }
});

plusButton.addEventListener("click", () => {
  currentQuantity++;
  quantityValue.textContent = currentQuantity;
});
const addToCartButton = document.querySelector("#addToCartButton");
const successMessage = document.querySelector("#successMessage");

addToCartButton.addEventListener("click", () => {
  successMessage.textContent = "Embrace Side Board Added To Cart!";
  successMessage.style.display = "block"; // Show the message
});

const productDescriptionElement = document.querySelector('.description p');
productDescriptionElement.textContent = data.product.description; // Get vendor from data and display it