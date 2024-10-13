export let cart1= JSON.parse(localStorage.getItem('cart1'))
if(!cart1){
    cart1 = [
        {
            productId:'weuryqueriowutyruieq',
            quantity:1
        },{
            productId:'ldshgdjgdajkshfdsf',
            quantity:1
        }
    ]
}

function saveCart(){
    localStorage.setItem('cart1',JSON.stringify(cart1))
}

export function addToCart(productId){
    let matchingItem;
        cart1.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem=cartItem;
            }
        });
        if(matchingItem){
            matchingItem.quantity+=1
        }
        else{
            cart1.push({
                productId:productId,
                quantity:1 
               })
        }
      saveCart()  
}

export function deleteCart(productId){
    let newcart=[]
    cart1.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
        newcart.push(cartItem)}
    });
    cart1 = newcart;
    saveCart()
}