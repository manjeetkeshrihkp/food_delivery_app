/* --- DATA --- */
const allCategories = [
    { name: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80" },
    { name: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80" },
    { name: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=80" },
    { name: "Rolls", img: "https://images.unsplash.com/photo-1536521642388-441263f88a61?w=200&q=80" },
    { name: "Coffee", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&q=80" },
    { name: "Chinese", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&q=80" },
    { name: "Healthy", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80" },
    { name: "Cake", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80" },
    { name: "Sandwich", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&q=80" },
    { name: "Ice Cream", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&q=80" },
    { name: "Pasta", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" },
    { name: "Juice", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=200&q=80" },
    { name: "Momos", img: "https://images.unsplash.com/photo-1625223007374-ee50611181e5?w=200&q=80" },
    { name: "Waffles", img: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=200&q=80" },
    { name: "Dosa", img: "https://images.unsplash.com/photo-1589301760014-d929645636a9?w=200&q=80" },
    { name: "Paratha", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=200&q=80" },
    { name: "Tea", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=200&q=80" },
    { name: "Fries", img: "https://images.unsplash.com/photo-1573080496987-a199f8cd75c5?w=200&q=80" },
    { name: "Shawarma", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&q=80" },
    { name: "Thali", img: "https://images.unsplash.com/photo-1626777552726-4a6531dd3cd7?w=200&q=80" },
];

/* --- ALL STORES --- */
let allStores = [
    { id: 1, type: 'inside', name: "The Daily Grind", tags: "Cafe • Coffee", rating: 4.8, img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80", price: 150 },
    { id: 4, type: 'inside', name: "Campus Canteen", tags: "Thali • Indian", rating: 4.0, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", price: 80 },
    { id: 6, type: 'inside', name: "Green Leaf", tags: "Healthy • Salads", rating: 4.6, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80", price: 220 },
    { id: 2, type: 'outside', name: "Sugar Rush", tags: "Bakery • Donuts", rating: 4.9, img: "https://images.unsplash.com/photo-1626803775151-61d756612f97?w=500&q=80", price: 250 },
    { id: 3, type: 'outside', name: "Spicy Wok", tags: "Chinese • Momos", rating: 4.2, img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80", price: 180 },
    { id: 5, type: 'outside', name: "Cheesy Bites", tags: "Pizza • Fast Food", rating: 4.4, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80", price: 300 }
];

/* --- LOCATIONS --- */
const insideHostels = [
    "Sarojini Bhawan – A", "Sarojini Bhawan – B", "Sarojini Bhawan – C",
    "Teresa Bhawan – A", "Teresa Bhawan - D", "Teresa Bhawan – B", "Teresa Bhawan – C",
    "Indira Bhawan – A", "Indira Bhawan – B", "Indira Bhawan – C",
    "Janki Bhawan – A", "Kalpana Bhawan - A", "Kalpana Bhawan - B",
    "Shastri Bhawan – A", "Shastri Bhawan – B", "Shastri Bhawan – C",
    "Kalam Bhawan – A", "Kalam Bhawan – B", "Kalam Bhawan – C",
    "Tagore Bhawan – A", "Tagore Bhawan – B", "Tagore Bhawan – C",
    "Milkha Bhawan – A", "Dhyaan Bhawan",
    "Sardar Bhawan – A", "Sardar Bhawan – B",
    "Atal Bhawan - A 1", "Atal Bhawan - B", "Atal Bhawan - A 2",
    "Tilak Bhawan – A", "Marie Curie",
    "Rani Laxmibai Bhavan - B", "Rani Laxmibai A",
    "Albert Einstein", "Azad Bhavan - A", "Abraham Lincoln",
    "Saarthi Hostel", "Shakuntala A", "Shakuntala B"
];
const outsideLocations = ["PIT Gate (Main)", "PIET Gate", "A1 Hostel", "Galaxy Residency", "Sharma PG", "Metro Heights"];

let currentMode = 'inside';

/* --- INIT --- */
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    startSlider();
});

function initApp() {
    renderHorizontalCategories();
    renderFullCategories();
    renderCurated();
    switchMode('inside'); // Auto Select Inside
}

/* --- AUTO SLIDER (6 SECONDS) --- */
function startSlider() {
    const slider = document.getElementById('offerSlider');
    let slideInterval;

    const runSlide = () => {
        slideInterval = setInterval(() => {
            const cardWidth = slider.offsetWidth;
            const scrollPos = slider.scrollLeft;
            const maxScroll = slider.scrollWidth - slider.offsetWidth;

            if (scrollPos >= maxScroll - 5) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 1000); // 6 Seconds
    };

    runSlide();

    // Pause on interaction
    slider.addEventListener('touchstart', () => clearInterval(slideInterval));
    slider.addEventListener('touchend', runSlide);
}

/* --- SWITCH LOGIC --- */
function switchMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-switch').forEach(el => el.classList.remove('active'));
    
    if(mode === 'inside') {
        document.getElementById('btnInside').classList.add('active');
        document.getElementById('currentLocationText').innerText = "Select Hostel...";
        document.getElementById('currentLocationText').style.color = "#1C1C1C";
        document.getElementById('listTitle').innerText = "Inside Canteens";
        document.getElementById('gateAlert').classList.add('hidden');
        updateLocationList(insideHostels, 'ri-building-line');
    } else {
        document.getElementById('btnOutside').classList.add('active');
        document.getElementById('currentLocationText').innerText = "Select Pickup Point...";
        document.getElementById('currentLocationText').style.color = "#E23744";
        document.getElementById('listTitle').innerText = "Outside Vendors";
        document.getElementById('gateAlert').classList.remove('hidden');
        updateLocationList(outsideLocations, 'ri-map-pin-range-line');
    }
    
    const filtered = allStores.filter(s => s.type === mode);
    renderStores(filtered);
}

/* --- SEARCH --- */
function searchData() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    let filtered;
    if(input === "") {
        filtered = allStores.filter(s => s.type === currentMode);
    } else {
        filtered = allStores.filter(s => s.type === currentMode && (s.name.toLowerCase().includes(input) || s.tags.toLowerCase().includes(input)));
    }
    renderStores(filtered);
}

/* --- RENDERERS --- */
function renderStores(data) {
    document.getElementById('storeCount').innerText = data.length;
    document.getElementById('storeList').innerHTML = data.length ? data.map(store => createStoreHTML(store)).join('') : '<div style="padding:20px;text-align:center;color:#888;">No results found.</div>';
}
function createStoreHTML(store) {
    return `<div class="store-card">
        <div class="store-img-box"><img src="${store.img}" class="store-img"><button class="like-btn"><i class="ri-heart-fill"></i></button></div>
        <div class="store-details">
            <div class="store-row-1"><div class="store-name">${store.name}</div><div class="rating-pill">${store.rating} <i class="ri-star-fill" style="font-size:10px"></i></div></div>
            <div class="store-tags">${store.tags}</div>
            <div class="store-footer">
                <span><i class="ri-EBicycles-line text-red"></i> ${store.type==='inside'?'Free Delivery':'Gate Pickup'}</span>
                <span><i class="ri-wallet-3-line text-red"></i> ₹${store.price}</span>
            </div>
        </div>
    </div>`;
}

function renderHorizontalCategories() {
    let html = allCategories.slice(0, 10).map(c => `<div class="cat-item"><div class="cat-img-wrapper"><img src="${c.img}" class="cat-img"></div><div class="cat-name">${c.name}</div></div>`).join('');
    html += `<div class="cat-item" onclick="toggleCategoryModal(true)"><div class="cat-img-wrapper view-more-btn"><i class="ri-arrow-down-s-line view-more-icon"></i></div><div class="cat-name text-red">View More</div></div>`;
    document.getElementById('categoryScroll').innerHTML = html;
}
function renderFullCategories() {
    document.getElementById('fullCategoryGrid').innerHTML = allCategories.map(c => `<div class="cat-item"><div class="cat-img-wrapper"><img src="${c.img}" class="cat-img"></div><div class="cat-name">${c.name}</div></div>`).join('');
}
function renderCurated() {
    document.getElementById('curatedScroll').innerHTML = [...allStores].sort((a,b)=>b.rating-a.rating).slice(0,5).map(i => `<div class="curated-card ripple"><img src="${i.img}" class="curated-img"><div class="overlay-content"><div class="curated-title">${i.name}</div><div class="curated-price">Try Now</div></div></div>`).join('');
}

function updateLocationList(locations, iconClass) {
    document.getElementById('locationListContainer').innerHTML = locations.map(loc => `<div class="loc-item" onclick="selectLocation('${loc}')"><i class="${iconClass} ${currentMode==='outside'?'text-red':''}"></i> ${loc}</div>`).join('');
}
function selectLocation(name) { document.getElementById('currentLocationText').innerText = name; toggleLocationModal(false); }

/* --- MODALS --- */
function toggleLocationModal(show) { show ? document.getElementById('locationModal').classList.add('open') : document.getElementById('locationModal').classList.remove('open'); }
function toggleCategoryModal(show) { show ? document.getElementById('categoryModal').classList.add('open') : document.getElementById('categoryModal').classList.remove('open'); }
function toggleSortModal(show) { show ? document.getElementById('sortModal').classList.add('open') : document.getElementById('sortModal').classList.remove('open'); }
function toggleCart(show) { 
    const el = document.getElementById('cartModal');
    if(show) { el.classList.add('open'); document.getElementById('cartItemsContainer').innerHTML = `<div class="cart-item"><div><b>2 x Cold Coffee</b><br><small>The Daily Grind</small></div><div>₹300</div></div>`; document.getElementById('cartTotal').innerText = "₹300"; } 
    else el.classList.remove('open'); 
}
function applySort(type) {
    let filtered = allStores.filter(store => store.type === currentMode);
    if(type === 'price_low') filtered.sort((a,b) => a.price - b.price);
    if(type === 'price_high') filtered.sort((a,b) => b.price - a.price);
    if(type === 'rating') filtered.sort((a,b) => b.rating - a.rating);
    renderStores(filtered);
    toggleSortModal(false);
}