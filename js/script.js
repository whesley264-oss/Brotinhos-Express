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

            pizzaNameInput.value = itemName;
            pizzaPriceInput.value = itemPrice;

            customizationModal.classList.add('active'); // Usa classe para ativar
        });
    });

    // --- Lógica para adicionar item personalizado ao carrinho ---
    addToCartCustomizedButton.addEventListener('click', () => {
        const size = document.querySelector('input[name="size"]:checked').value;
        const crust = document.querySelector('input[name="crust"]:checked').value;

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
        customizationModal.classList.remove('active'); // Usa classe para desativar
    });

    // --- Lógica do Carrinho de Compras (Modal) ---
    cartButton.addEventListener('click', () => {
        renderCartItems();
        cartModal.classList.add('active'); // Usa classe para ativar
    });

    // --- Lógica para fechar os modais ---
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartModal.classList.remove('active');
            customizationModal.classList.remove('active');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal || event.target == customizationModal) {
            cartModal.classList.remove('active');
            customizationModal.classList.remove('active');
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

    // --- Lógica do Botão "Voltar ao Topo" ---
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // --- Lógica para destacar link de navegação ativo ---
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
