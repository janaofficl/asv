import { cart1, deleteCart } from "./cart.js";
import { products } from "./product.js";




let cartSumaryHTML=''

cart1.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct= product
        }
    })
    
    cartSumaryHTML +=`<div class="cart-container js-cart-container-${matchingProduct.id}">
                    <div class="delivery-date dater">
                        Delivery date: Tuesday, june 21
                    </div>
                    <div class="cart-detail-grid">
                        <img  class="product-img" src="${matchingProduct.image}" alt="">
                        <div class="cart-detail">
                            <div class="product-name">
                                ${matchingProduct.name}
                            </div>
                            <div class="product-price">₹
                                ${matchingProduct.priceCents}
                            </div>
                            <div class="product-qty">
                                <span>
                                    Quantity: <span class="qty-lable">${cartItem.quantity}</span>
                                </span>
                                <span class="update-link linkp">Update</span>
                                <span class="delete-link linkp js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
                            </div>
                        </div>
                        
                        <div class="delivey-option-block">
                            <div class="delivery-title">
                                Choose a delivery option:
                            </div>
                            <div class="delivery-option">
                                <input type="radio"  class="delivery-input" name="delivery-option-${matchingProduct.id}">
                            <div>
                            <div class="delivery-date datep">
                                Sunday, October 14
                            </div>
                            <div class="delivery-price">
                                  FREE Shipping
                            </div>
                            </div>
                        </div>
                            <div class="delivery-option">
                                <input type="radio" checked class="delivery-input" name="delivery-option-${matchingProduct.id}">
                            <div>
                            <div class="delivery-date datep">
                                Friday, October 11
                            </div>
                            <div class="delivery-price">
                                ₹80 - Shipping
                            </div>
                            </div>
                        </div>
                            <div class="delivery-option">
                                <input type="radio" checked class="delivery-input" name="delivery-option-${matchingProduct.id}">
                            <div>
                            <div class="delivery-date datep">
                                Wednesday, October 09
                            </div>
                            <div class="delivery-price">
                                ₹180 - Shipping
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
});
document.querySelector('.js-order-summary').innerHTML=cartSumaryHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId = link.dataset.productId
        deleteCart(productId);
        console.log(cart1);

        const container= document.querySelector(`.js-cart-container-${productId}`);
        container.remove()
    })
})
console.log(dayjs());
