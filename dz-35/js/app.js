
        document.addEventListener('DOMContentLoaded', function() {
            const products = [
                { image: 'https://content1.rozetka.com.ua/goods/images/big/353437613.jpg', id: 'product1', name: 'Мобильный телефон Samsung Galaxy Fold 5 12/512GB Black', desc: '78 999₴', category: 'Мобильные телефоны' },
        { image: 'https://content2.rozetka.com.ua/goods/images/big/364836782.jpg', id: 'product2', name: 'Мобильный телефон Apple iPhone 15 Pro Max 512GB Black Titanium', desc: '69 999₴', category: 'Мобильные телефоны' },
        { image: 'https://content1.rozetka.com.ua/goods/images/big/373617859.jpg', id: 'product3', name: 'GOOGLE Pixel 8 Pro 512 GB Obsidian', desc: '71 060₴', category: 'Мобильные телефоны' },
        { image: 'https://content1.rozetka.com.ua/goods/images/big/362258264.png', id: 'product4', name: 'Xiaomi Mix Fold 2 12/512GB Shadowmoon Black', desc: '74 852₴', category: 'Мобильные телефоны' },
        { image: 'https://content2.rozetka.com.ua/goods/images/big/315852232.jpg', id: 'product5', name: 'Спутниковый телефон Iridium 9575 Extreme', desc: '124 900₴', category: 'Мобильные телефоны' },

        { image: 'https://content.rozetka.com.ua/goods/images/big/388202869.jpg', id: 'product6', name: 'Samsung QE98QN90AAUXUA', desc: '359 999₴', category: 'Телевизоры' },
        { image: 'https://content.rozetka.com.ua/goods/images/big/360931137.jpg', id: 'product7', name: 'Loewe bild i.77 dr+', desc: '284 899₴', category: 'Телевизоры' },
        { image: 'https://content1.rozetka.com.ua/goods/images/big/381621575.jpg', id: 'product8', name: 'TCL MiniLED 98C805', desc: '199 999₴', category: 'Телевизоры' },
        { image: 'https://content2.rozetka.com.ua/goods/images/big/390334203.jpg', id: 'product9', name: ' LG OLED83C36LA', desc: '249 999₴', category: 'Телевизоры' },
        { image: 'https://content2.rozetka.com.ua/goods/images/big/360931121.jpg', id: 'product10', name: 'Loewe bild i.65 dr+', desc: '179 899₴', category: 'Телевизоры' },

        { image: 'https://content.rozetka.com.ua/goods/images/big/351441278.jpg', id: 'product11', name: 'Modbar модуль Espresso AV', desc: '387 450₴', category: 'Кофеварки' },
        { image: 'https://content.rozetka.com.ua/goods/images/big/198368299.jpg', id: 'product12', name: 'La Marzocco GS/3 AV 1 GR', desc: '309 960₴', category: 'Кофеварки' }
            ];
        
            const categoriesContainer = document.getElementById('categoryList');
            const productsContainer = document.querySelector('.productList');
            const productInfoContainer = document.querySelector('.productItem');
        
            categoriesContainer.addEventListener('click', function(e) {
                if (e.target && e.target.nodeName === "LI") {
                    showProductsByCategory(e.target.textContent);
                }
            });
        
            productsContainer.addEventListener('click', function(e) {
                if (e.target && e.target.classList.contains('productBtn')) {
                    showProductDetails(e.target.getAttribute('data-id'));
                }
            });
        
            function showProductsByCategory(category) {
                const filteredProducts = products.filter(product => product.category === category);
                productsContainer.innerHTML = filteredProducts.map(product => 
                    `<button class="productBtn" data-id="${product.id}">${product.name}</button>`
                ).join('');
            }
        
            function showProductDetails(productId) {
                const selectedProduct = products.find(product => product.id === productId);
                productInfoContainer.innerHTML = `
                    <img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="product-image">
                    <p class="price">${selectedProduct.desc}</p>
                    <button class="btn" onclick="buyProduct()">Купить</button>
                `;
            }
        
            window.buyProduct = function() {
                alert('Товар куплен!');
                productsContainer.innerHTML = '';
                productInfoContainer.innerHTML = '';
            };
        
            products.push({
                image: 'http://example.com/newproduct.jpg', 
                id: 'newproduct', 
                name: 'Новый Продукт', 
                desc: 'Описание нового продукта', 
                category: 'Новая Категория'
            });
        });