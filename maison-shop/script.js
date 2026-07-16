/* =========================================
   MAISON — E-Commerce Script
   ========================================= */

// ─── DATA ────────────────────────────────────────────────────────────────────

const products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        category: "Footwear",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
        rating: 4.8,
        reviews: 124,
        badge: "Sale",
        description: "Premium leather sneakers with cushioned insole for all-day comfort. Crafted with Italian full-grain leather, these sneakers age beautifully and mold to your foot over time.",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
        colors: ["#ffffff", "#000000", "#d4a373"]
    },
    {
        id: 2,
        name: "Denim Jacket",
        category: "Clothing",
        price: 75.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
        rating: 4.6,
        reviews: 89,
        badge: "New",
        description: "Classic denim jacket with a modern fit. Features a structured silhouette with subtle washed finish. A wardrobe essential that works across all seasons.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#4a6fa5", "#1a1a2e"]
    },
    {
        id: 3,
        name: "Leather Crossbody Bag",
        category: "Accessories",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
        rating: 4.9,
        reviews: 203,
        badge: "Sale",
        description: "Genuine full-grain leather crossbody bag, hand-stitched by artisans in Florence. Develops a rich patina over time. Adjustable strap with gold-tone hardware.",
        sizes: ["One Size"],
        colors: ["#8b4513", "#000000", "#d2691e"]
    },
    {
        id: 4,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
        rating: 4.7,
        reviews: 456,
        badge: "Sale",
        description: "Premium wireless headphones with hybrid active noise cancellation, 30-hour battery, and studio-grade audio tuned by master engineers.",
        sizes: ["One Size"],
        colors: ["#000000", "#ffffff", "#c0c0c0"]
    },
    {
        id: 5,
        name: "Minimalist Watch",
        category: "Accessories",
        price: 159.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
        rating: 4.8,
        reviews: 178,
        badge: "New",
        description: "Elegant minimalist timepiece with Swiss quartz movement. Sapphire crystal glass with anti-reflective coating. 5 ATM water resistant.",
        sizes: ["One Size"],
        colors: ["#000000", "#8b4513", "#1a1a2e"]
    },
    {
        id: 6,
        name: "Running Shoes",
        category: "Footwear",
        price: 119.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        rating: 4.5,
        reviews: 312,
        badge: "Sale",
        description: "Performance running shoes with carbon fiber plate and nitrogen-infused foam midsole. Engineered for speed, comfort and long-distance endurance.",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
        colors: ["#ff6b6b", "#000000", "#4ecdc4"]
    },
    {
        id: 7,
        name: "Cotton T-Shirt",
        category: "Clothing",
        price: 29.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
        rating: 4.4,
        reviews: 567,
        badge: null,
        description: "100% GOTS-certified organic cotton, pre-shrunk and enzyme-washed for a perfectly broken-in feel from the first wear. Available in a classic relaxed fit.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["#ffffff", "#000000", "#1a1a2e", "#2d6a4f"]
    },
    {
        id: 8,
        name: "Sunglasses",
        category: "Accessories",
        price: 89.00,
        originalPrice: 119.00,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
        rating: 4.6,
        reviews: 234,
        badge: "Sale",
        description: "Polarized CR-39 lenses with UV400 protection. Lightweight Italian acetate frame. Each pair takes 6 weeks to craft by hand in the Dolomites.",
        sizes: ["One Size"],
        colors: ["#000000", "#8b4513", "#4a4a4a"]
    },
    {
        id: 9,
        name: "Backpack",
        category: "Accessories",
        price: 79.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
        rating: 4.7,
        reviews: 189,
        badge: "New",
        description: "Water-resistant 420D ripstop nylon backpack with padded 15\" laptop sleeve. Ergonomic shoulder straps with air-mesh back panel for ventilation.",
        sizes: ["One Size"],
        colors: ["#1a1a2e", "#2d6a4f", "#8b4513"]
    },
    {
        id: 10,
        name: "Slim Fit Jeans",
        category: "Clothing",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
        rating: 4.5,
        reviews: 423,
        badge: "Sale",
        description: "Japanese selvedge denim with 2% elastane for comfort. 12 oz pre-washed denim that fades beautifully with wear. A considered staple for the modern wardrobe.",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["#1a1a2e", "#4a6fa5", "#000000"]
    },
    {
        id: 11,
        name: "Smart Watch",
        category: "Electronics",
        price: 299.99,
        originalPrice: 349.99,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
        rating: 4.8,
        reviews: 567,
        badge: "Sale",
        description: "Next-generation health platform with ECG, blood oxygen, and stress monitoring. 7-day battery life, always-on AMOLED display, 50m water resistance.",
        sizes: ["40mm", "44mm"],
        colors: ["#000000", "#c0c0c0", "#ffd700"]
    },
    {
        id: 12,
        name: "Merino Wool Sweater",
        category: "Clothing",
        price: 89.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
        rating: 4.6,
        reviews: 156,
        badge: "New",
        description: "Extra-fine 17.5 micron Merino wool from sustainably managed farms in New Zealand. Temperature-regulating, anti-odor, and machine-washable. A true investment piece.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#2d6a4f", "#8b4513", "#1a1a2e", "#d4a373"]
    }
];

const categories = [
    { name: "Clothing", icon: "👗", count: 156 },
    { name: "Footwear", icon: "👟", count: 89 },
    { name: "Accessories", icon: "👜", count: 234 },
    { name: "Electronics", icon: "🎧", count: 67 }
];

// ─── STATE ────────────────────────────────────────────────────────────────────

let cart = JSON.parse(localStorage.getItem('maison_cart')) || [];
let activeCategory = 'all';
let activeSort = 'default';
let modalQty = 1;

// ─── ELEMENTS ─────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

const els = {
    header: $('header'),
    cartBtn: $('cartBtn'),
    cartCount: $('cartCount'),
    cartCountLabel: $('cartCountLabel'),
    cartSidebar: $('cartSidebar'),
    cartOverlay: $('cartOverlay'),
    closeCart: $('closeCart'),
    cartItems: $('cartItems'),
    cartTotal: $('cartTotal'),
    cartFooter: $('cartFooter'),
    checkoutBtn: $('checkoutBtn'),
    productGrid: $('productGrid'),
    categoryGrid: $('categoryGrid'),
    sortSelect: $('sortSelect'),
    searchToggle: $('searchToggle'),
    searchClose: $('searchClose'),
    searchDropdown: $('searchDropdown'),
    searchInput: $('searchInput'),
    quickViewModal: $('quickViewModal'),
    modalOverlay: $('modalOverlay'),
    modalClose: $('modalClose'),
    modalContent: $('modalContent'),
    checkoutOverlay: $('checkoutOverlay'),
    checkoutClose: $('checkoutClose'),
    checkoutForm: $('checkoutForm'),
    checkoutSubtotal: $('checkoutSubtotal'),
    checkoutTotal: $('checkoutTotal'),
    orderItems: $('orderItems'),
    newsletterForm: $('newsletterForm'),
    toastContainer: $('toastContainer'),
    loadMoreBtn: $('loadMoreBtn'),
    mobileMenuBtn: $('mobileMenuBtn'),
    filterChips: $('filterChips'),
};

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    updateCartUI();
    attachEvents();
    initScrollEffect();
    initCardFormat();
});

// ─── SCROLL ───────────────────────────────────────────────────────────────────

function initScrollEffect() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

function renderCategories() {
    els.categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.name}')">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${cat.name}</span>
            <span class="cat-count">${cat.count} pieces</span>
            <span class="cat-arrow">→</span>
        </div>
    `).join('');
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

function getFilteredProducts() {
    let list = [...products];
    if (activeCategory !== 'all') {
        list = list.filter(p => p.category === activeCategory);
    }
    const q = els.searchInput.value.trim().toLowerCase();
    if (q) {
        list = list.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }
    switch (activeSort) {
        case 'price-low': list.sort((a, b) => a.price - b.price); break;
        case 'price-high': list.sort((a, b) => b.price - a.price); break;
        case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'rating': list.sort((a, b) => b.rating - a.rating); break;
    }
    return list;
}

function renderProducts() {
    const list = getFilteredProducts();
    if (list.length === 0) {
        els.productGrid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--ink-light)">
                <p style="font-family:var(--font-display);font-size:1.4rem;margin-bottom:8px">No pieces found</p>
                <p style="font-size:0.85rem">Try adjusting your filters</p>
            </div>`;
        return;
    }

    els.productGrid.innerHTML = list.map(p => {
        const discount = p.originalPrice
            ? Math.round((1 - p.price / p.originalPrice) * 100)
            : null;
        return `
        <div class="product-card" data-id="${p.id}">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                ${p.badge ? `<span class="product-badge ${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
                <div class="product-overlay">
                    <div class="overlay-actions">
                        <button class="overlay-btn primary" onclick="addToCart(${p.id});event.stopPropagation()">Add to Bag</button>
                        <button class="overlay-btn icon-only" onclick="openQuickView(${p.id});event.stopPropagation()" title="Quick View">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category-tag">${p.category}</span>
                    <span class="product-stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span>
                </div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price-row">
                    <span class="price-current">$${p.price.toFixed(2)}</span>
                    ${p.originalPrice ? `<span class="price-original">$${p.originalPrice.toFixed(2)}</span>` : ''}
                    ${discount ? `<span class="price-saving">−${discount}%</span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');

    // Stagger animation
    document.querySelectorAll('.product-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 50);
    });
}

function filterByCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle('active', c.dataset.value === cat);
    });
    renderProducts();
    scrollToProducts();
}

function scrollToProducts() {
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── CART ─────────────────────────────────────────────────────────────────────

function openCart() {
    els.cartSidebar.classList.add('active');
    els.cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartFn() {
    els.cartSidebar.classList.remove('active');
    els.cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(i => i.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to bag`, 'success');

    // Pulse cart button
    els.cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => { els.cartBtn.style.transform = ''; }, 200);
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); }
}

function saveCart() {
    localStorage.setItem('maison_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    // Badge
    els.cartCount.textContent = totalItems;
    els.cartCount.classList.toggle('visible', totalItems > 0);
    els.cartCountLabel.textContent = totalItems > 0 ? `(${totalItems})` : '';

    // Total
    els.cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    // Checkout summary
    if (els.checkoutSubtotal) els.checkoutSubtotal.textContent = `$${totalPrice.toFixed(2)}`;
    if (els.checkoutTotal) els.checkoutTotal.textContent = `$${totalPrice.toFixed(2)}`;

    // Order items in checkout
    if (els.orderItems) {
        els.orderItems.innerHTML = cart.length === 0
            ? `<p style="font-size:0.8rem;color:var(--ink-light);padding:10px 0">Your bag is empty</p>`
            : cart.map(item => `
                <div class="order-item">
                    <div class="order-item-img"><img src="${item.image}" alt="${item.name}"></div>
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-qty">Qty: ${item.quantity}</div>
                    </div>
                    <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>`).join('');
    }

    // Cart items
    if (cart.length === 0) {
        els.cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛍️</div>
                <h4>Your bag is empty</h4>
                <p>Discover our curated collection and add pieces you love.</p>
            </div>`;
    } else {
        els.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-body">
                    <div class="cart-item-cat">${item.category}</div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
                            <span class="qty-num">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>`).join('');
    }
}

// ─── QUICK VIEW ───────────────────────────────────────────────────────────────

function openQuickView(productId) {
    const p = products.find(p => p.id === productId);
    modalQty = 1;

    els.modalContent.innerHTML = `
        <div class="qv-image">
            <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="qv-details">
            <div class="qv-cat">${p.category}</div>
            <h2 class="qv-name">${p.name}</h2>
            <div class="qv-rating">
                <span class="qv-stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span>
                <span class="qv-reviews">${p.rating} · ${p.reviews} reviews</span>
            </div>
            <div class="qv-price">
                <span class="qv-price-current">$${p.price.toFixed(2)}</span>
                ${p.originalPrice ? `<span class="qv-price-original">$${p.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <p class="qv-desc">${p.description}</p>

            ${p.sizes.length > 1 ? `
                <div class="qv-label">Select Size</div>
                <div class="size-options">
                    ${p.sizes.map((s, i) => `
                        <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectSize(this)">${s}</button>
                    `).join('')}
                </div>` : ''}

            <div class="qv-label">Color</div>
            <div class="color-options">
                ${p.colors.map((c, i) => `
                    <button class="color-btn ${i === 0 ? 'active' : ''}"
                            style="background:${c}"
                            onclick="selectColor(this)"
                            title="${c}"></button>
                `).join('')}
            </div>

            <div class="qv-label">Quantity</div>
            <div class="qv-qty">
                <div class="qv-qty-controls">
                    <button onclick="changeQty(-1)">−</button>
                    <span id="modalQtyDisplay">1</span>
                    <button onclick="changeQty(1)">+</button>
                </div>
            </div>

            <div class="qv-actions">
                <button class="btn-add-cart" onclick="addToCartFromModal(${p.id})">Add to Bag</button>
                <button class="btn-wishlist" onclick="addToWishlist(${p.id})" title="Save to Wishlist">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
        </div>`;

    els.quickViewModal.classList.add('active');
    els.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    els.quickViewModal.classList.remove('active');
    els.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectColor(btn) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function changeQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    const el = document.getElementById('modalQtyDisplay');
    if (el) el.textContent = modalQty;
}

function addToCartFromModal(id) {
    for (let i = 0; i < modalQty; i++) addToCart(id);
    modalQty = 1;
    closeQuickView();
}

function addToWishlist(id) {
    const p = products.find(p => p.id === id);
    showToast(`${p.name} saved to wishlist`, 'success');
}

// ─── CHECKOUT ─────────────────────────────────────────────────────────────────

function openCheckout() {
    if (cart.length === 0) { showToast('Your bag is empty', 'error'); return; }
    closeCartFn();
    updateCartUI();
    setTimeout(() => {
        els.checkoutOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 300);
}

function closeCheckout() {
    els.checkoutOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function handleCheckout(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = 'Processing…';
    btn.disabled = true;

    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
        closeCheckout();
        els.checkoutForm.reset();
        showToast('🎉 Order placed! Thank you for shopping with Maison.', 'success');
        btn.textContent = 'Place Order';
        btn.disabled = false;
    }, 1800);
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────

function attachEvents() {
    // Cart
    els.cartBtn.addEventListener('click', openCart);
    els.closeCart.addEventListener('click', closeCartFn);
    els.cartOverlay.addEventListener('click', closeCartFn);
    els.checkoutBtn.addEventListener('click', openCheckout);

    // Quick View
    els.modalClose.addEventListener('click', closeQuickView);
    els.modalOverlay.addEventListener('click', closeQuickView);

    // Checkout
    els.checkoutClose.addEventListener('click', closeCheckout);
    els.checkoutForm.addEventListener('submit', handleCheckout);

    // Search
    els.searchToggle.addEventListener('click', () => {
        els.searchDropdown.classList.toggle('open');
        if (els.searchDropdown.classList.contains('open')) {
            setTimeout(() => els.searchInput.focus(), 100);
        }
    });
    els.searchClose.addEventListener('click', () => {
        els.searchDropdown.classList.remove('open');
    });
    els.searchInput.addEventListener('input', renderProducts);

    // Filter chips
    els.filterChips.addEventListener('click', e => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        activeCategory = chip.dataset.value;
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderProducts();
    });

    // Sort
    els.sortSelect.addEventListener('change', e => {
        activeSort = e.target.value;
        renderProducts();
    });

    // Newsletter
    els.newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast(`Welcome! We'll be in touch at ${email}`, 'success');
        e.target.reset();
    });

    // Load more (demo)
    els.loadMoreBtn.addEventListener('click', () => {
        showToast('All pieces are now shown', 'success');
    });

    // Mobile menu
    els.mobileMenuBtn.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--warm-white)';
        nav.style.padding = '20px 40px';
        nav.style.borderBottom = '1px solid var(--border)';
        nav.style.zIndex = '999';
    });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeCartFn();
            closeQuickView();
            closeCheckout();
            els.searchDropdown.classList.remove('open');
        }
    });
}

// ─── CARD FORMATTING ─────────────────────────────────────────────────────────

function initCardFormat() {
    document.addEventListener('input', e => {
        if (e.target.id === 'cardNum') {
            e.target.value = e.target.value
                .replace(/\D/g, '')
                .replace(/(.{4})/g, '$1 ')
                .trim()
                .slice(0, 19);
        }
        if (e.target.id === 'cardExpiry') {
            e.target.value = e.target.value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1 / $2')
                .slice(0, 7);
        }
        if (e.target.id === 'cardCvv') {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
        }
    });
}

// ─── TOAST ────────────────────────────────────────────────────────────────────

function showToast(message, type = 'success') {
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span> ${message}`;
    els.toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}
