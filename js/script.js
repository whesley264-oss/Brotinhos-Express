document.addEventListener('DOMContentLoaded', () => {
    // Seletores dos elementos
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartButton = document.querySelector('.cart button');
    const cartModal = document.getElementById('cart-modal');
    const customizationModal = document.getElementById('customization-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const addToCartCustomizedButton = document.getElementById('add-to-cart-customized');
    const pizzaNameInput = document.getElementById('pizza-name');
    const pizzaPriceInput = document.getElementById('pizza-price');
    const faqQuestions = document.querySelectorAll('.faq-question');

    let cart = [];

    // --- Lógica para abrir o modal de personalização ---
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;

            // Armazena os dados da pizza no modal
            pizzaNameInput.value = itemName;
            pizzaPriceInput.value = itemPrice;

            customizationModal.style.display = 'block';
        });
    });

    // --- Lógica para adicionar item personalizado ao carrinho ---
    addToCartCustomizedButton.addEventListener('click', () => {
        const size = document.querySelector('input[name="size"]:checked').value;
        const crust = document.querySelector('input[name="crust"]:checked').value;

        // Calcula o preço final
        let finalPrice = parseFloat(pizzaPriceInput.value.replace('R$', '').replace(',', '.'));
        if (crust === 'recheada') {
            finalPrice += 5;
        }

        const item = {
            name: `${pizzaNameInput.value} (${size}, borda ${crust})`,
            price: `R$ ${finalPrice.toFixed(2).replace('.', ',')}`
        };

        cart.push(item);
        updateCart();
        customizationModal.style.display = 'none';
    });

    // --- Lógica do Carrinho de Compras (Modal) ---
    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
        renderCartItems();
    });

    // --- Lógica para fechar os modais ---
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartModal.style.display = 'none';
            customizationModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal || event.target == customizationModal) {
            cartModal.style.display = 'none';
            customizationModal.style.display = 'none';
        }
    });

    // --- Funções Auxiliares do Carrinho ---
    function updateCart() {
        cartButton.textContent = `Meu Carrinho (${cart.length})`;
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            return;
        }
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // --- Lógica do Acordeão do FAQ ---
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
