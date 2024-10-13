
document.getElementById('searchBar').addEventListener('keyup', function() {
    const search=document.getElementById('pro');
    const ms=document.getElementById('ms');
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.products-container');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
            search.style.display='none';
            ms.style.display='none';
        } else {
            product.style.display = 'none';
        }
    });
}); 



