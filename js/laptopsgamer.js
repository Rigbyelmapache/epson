function toggleFilterGroup() {
    const filterGroups = document.querySelectorAll('.filter-group');
    filterGroups.forEach(group => {
        group.style.display = (group.style.display === 'none' || group.style.display === '') ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los headers de los contenedores de filtros
    const filterHeaders = document.querySelectorAll('.filter-container-header');
    
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Encuentra el contenedor de filtros relacionado
            const filterContainer = this.nextElementSibling;

            // Alterna la clase 'active'
            filterContainer.classList.toggle('active');
        });
    });
    window.clearFilters = function() {
        // Restablecer filteredProducts a su valor original
        filteredProducts = [...products];
        currentPage = 1; // Resetear a la primera página
        displayProducts(currentPage);
        updatePaginationButtons();
    };

    
});
const products = [
    { id: 1, title: 'Laptop Gamer Acer Nitro 5 Ryzen 7 5800 RTX 3060', price: '$400', descprice:'$ 18000', description: '40 inch HD TV', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'Acer' , processor:'Intel i5',discount:'25%'},
    { id: 2, title: 'Laptop Gamer Asus TUF Ryzen 9 7940HS 16Gb RTX 4060', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: 'imagenes/laptop-gamer/laptop-2.png', brand: 'Asus' ,processor:'Intel i7',discount:'25%'},
    { id: 3, title: 'Laptop Gamer Asus ROGstrix g17 16Gb RTX 4090', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: 'imagenes/laptop-gamer/laptop-3.png', brand: 'Asus',processor:'' ,discount:'25%'},
    { id: 4, title: 'Laptop Gamer Hp Pavilion 15-DK1504LA Core I5 RTX 2060', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: 'imagenes/laptop-gamer/laptop-4.png', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 5, title: 'Laptop Gamer Acer Predator Core I7 10°Gen 16 RAM RTX 3060', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: 'imagenes/laptop-gamer/laptop-5.png', brand: 'Acer',processor:'' ,discount:'25%'},
    { id: 6, title: 'Laptop Gamer Dell G5530 Core I7-13650HX 8GB RTX4050', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: 'imagenes/laptop-gamer/laptop-6.png', brand: 'Dell',processor:'' ,discount:'25%'},
    { id: 7, title: 'Laptop Gamer Dell G15 5520 Core I7-12700h 16GB RTX 3060 6GB', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'imagenes/laptop-gamer/laptop-7.png', brand: 'Dell',processor:'',discount:'25%' },
    { id: 8, title: 'Laptop Gamer ROGStrix G17 G7AMD Ryzen 9 7845HX 16 GB RTX 4060', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: 'imagenes/laptop-gamer/laptop-8.png', brand: 'Asus',processor:'',discount:'25%' },
    { id: 9, title: 'Laptop Gamer Asus ROGStrix G15 Ryzen 9 16GB RAM ', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: 'imagenes/laptop-gamer/laptop-9.png', brand: 'Asus',processor:'',discount:'25%' },
    { id: 10,title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: 'imagenes/laptop-gamer/laptop-10.png', brand: 'HP',processor:'',discount:'25%' },
    { id: 11, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'HP',processor:'' ,discount:'25%'},
    { id:12, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 13, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 14, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 15, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'HP',processor:'',discount:'25%' },
    { id: 16, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'imagenes/laptop-gamer/laptop-1.png', brand: 'HP',processor:'',discount:'25%' },
    { id: 17, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: 'imagenes/laptop-gamer/laptop-1.png' , brand: 'HP',processor:'',discount:'25%'},
    { id: 18, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: ' ', brand: 'HP',processor:'',discount:'25%'},
    { id: 19, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: '', brand: 'HP',processor:'',discount:'25%' },
    { id: 20, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: '', brand: 'HP',processor:'',discount:'25%' },
    { id: 21, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: '', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 22, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$300', description: 'Gaming console', image: '' , brand: 'HP',processor:'',discount:'25%'},
    { id: 23, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: '', brand: 'HP',processor:'',discount:'25%' },
    { id: 24, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: '', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 25, title: 'Laptop Gamer Hp Victus 16 Ryzen 5 5600H 8GB RTX 3050', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'camera.jpg', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 26, title: 'Smartwatch', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: '', brand: 'HP',processor:'',discount:'25%' },
    { id: 27, title: 'Tablet', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: '', brand: 'HP',processor:'' ,discount:'25%'},
    { id: 28, title: 'Router', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: '', brand: 'HP',processor:'' ,discount:'25%'},
    // Agregar más productos según sea necesario
];

const brands = [
     'LG', 'Dell', 'HP', 'Asus', 'Acer', 'Lenovo', 
];

const processors = [
    'Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Apple M1', 'Apple M2'
];

const productsPerPage = 5;
let currentPage = 1;
let filteredProducts = [...products];
let selectedBrand = '';
let selectedProcessor = '';

function displayProducts(page) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <div class='discount'> ${product.discount}</div>
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class='precio-descuento'> <div class='span-p'> <span> ${product.descprice} </span> <div> OFERTA </div></div>
             <p class='p-p'>${product.price} </p></div>
             <button> Agregar al carrito </button>
        `;

        productGrid.appendChild(productItem);
    });

    document.getElementById('page-info').textContent = ` ${currentPage} de ${Math.ceil(filteredProducts.length / productsPerPage)}`;
}

function updatePaginationButtons() {
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === Math.ceil(filteredProducts.length / productsPerPage);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
        updatePaginationButtons();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
        currentPage++;
        displayProducts(currentPage);
        updatePaginationButtons();
    }
});


function displayFilters() {
    const brandList = document.getElementById('brand-list');
    const processorList = document.getElementById('processor-list');

    brands.slice(0, 5).forEach(brand => {
        const li = document.createElement('li');
        li.textContent = brand;
        li.addEventListener('click', () => {
            selectedBrand = brand;
            filterProducts();
        });
        brandList.appendChild(li);
    });

    processors.slice(0, 5).forEach(processor => {
        const li = document.createElement('li');
        li.textContent = processor;
        li.addEventListener('click', () => {
            selectedProcessor = processor;
            filterProducts();
        });
        processorList.appendChild(li);
    });
}


function toggleShowMore(type) {
    const list = type === 'brand' ? brands : processors;
    const listElement = type === 'brand' ? document.getElementById('brand-list') : document.getElementById('processor-list');
    const showMoreButton = type === 'brand' ? document.getElementById('brand-show-more') : document.getElementById('processor-show-more');

    if (showMoreButton.textContent === 'Mostrar más') {
        list.slice(5).forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            if (type === 'brand') {
                li.addEventListener('click', () => {
                    selectedBrand = item;
                    filterProducts();
                });
            } else {
                li.addEventListener('click', () => {
                    selectedProcessor = item;
                    filterProducts();
                });
            }
            listElement.appendChild(li);
        });
        showMoreButton.textContent = 'Mostrar menos';
    } else {
        while (listElement.children.length > 5) {
            listElement.removeChild(listElement.lastChild);
        }
        showMoreButton.textContent = 'Mostrar más';
    }
}


function filterProducts() {
    filteredProducts = products.filter(product => {
        return (selectedBrand ? product.brand === selectedBrand : true) &&
               (selectedProcessor ? product.processor === selectedProcessor : true);
    });
    currentPage = 1;
    displayProducts(currentPage);
    updatePaginationButtons();
}
// busqeda 
function addSearchListener() {
    document.getElementById('searchInput').addEventListener('keyup', function() {
        const searchQuery = this.value.toLowerCase();
        filteredProducts = products.filter(product => {
            return product.title.toLowerCase().includes(searchQuery) ||
                   product.description.toLowerCase().includes(searchQuery) ||
                   product.brand.toLowerCase().includes(searchQuery) ||
                   product.processor.toLowerCase().includes(searchQuery);
        });
        currentPage = 1;
        displayProducts(currentPage);
        updatePaginationButtons();
    });
}

// Inicializar la visualización de productos y filtros
displayProducts(currentPage);
updatePaginationButtons();
addSearchListener();
displayFilters();
