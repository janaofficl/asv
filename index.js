import { products } from "./product.js";
import { cart1, addToCart } from "./cart.js";
let productsHTML=''
products.forEach((product)=>{
    productsHTML +=`<div class="products-container" id="products-con">
                    <div class="product-image-container">
                        <img class="product-image" src="${product.image}" alt="">
                    </div>
                    <div class="product-name">
                        ${product.name}
                    </div>
                    <div class="rating-con">
                            <img src="rating-${product.rating.star*10}.png" class="rating-star">
                            <div class="rating-count">${product.rating.count}</div>                    
                    </div>
                    <div class="product-price">₹
                        ${product.priceCents }
                      </div>
                    <div class="products-qty">
                        <select>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option> 
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                    </div>
                    <button class="add-to-cart-btn js-btn" data-product-id="${product.id}">Add to cart</button>
                </div>`
})
document.querySelector('.js-grid').innerHTML=productsHTML;

function updateqty(){
    let cartQuantity = 0;
    cart1.forEach((item) => {
        cartQuantity += item.quantity
    })
    document.getElementById('cart-qty').innerHTML=cartQuantity;
}

document.querySelectorAll('.js-btn').forEach((button) => {
    button.addEventListener('click',() => {
       const productId=button.dataset.productId;
       addToCart(productId);
       updateqty();
})
})

