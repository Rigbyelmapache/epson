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
    { id: 1, title: 'Television', price: '$400', descprice:'$ 18000', description: '40 inch HD TV', image: 'imagenes/computo-1.webp', brand: 'Samsung',discount:'25%' },
    { id: 2, title: 'Laptop', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: '../imagenes/monitores/monitore-1-1.png', brand: 'Apple' ,discount:'35%'},
    { id: 3, title: 'Printer', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: '../imagenes/monitores/monitor-2.png', brand: 'HP' ,discount:'55%'},
    { id: 4, title: 'Console', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: 'imagenes/monitores/monitor-3.png', brand: 'Sony',discount:'45%' },
    { id: 5, title: 'Smartphone', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: 'imagenes/monitores/monitor-4.png', brand: 'Samsung',discount:'75%' },
    { id: 6, title: 'Headphones', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: 'imagenes/monitores/monitor-5.png', brand: 'Sony',discount:'25%' },
    { id: 7, title: 'Camera', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'imagenes/monitores/monitor-6.png', brand: 'Canon',discount:'25%' },
    { id: 8, title: 'Smartwatch', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: 'imagenes/monitores/monitor-7.png', brand: 'Apple',discount:'35%' },
    { id: 9, title: 'Tablet', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: 'imagenes/monitores/monitor-8.png', brand: 'Samsung' ,discount:'15%'},
    { id: 10, title: 'Router', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: 'imagenes/monitores/monitor-9.png', brand: 'TP-Link',discount:'15%' },
    { id: 11, title: 'Laptop', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: 'imagenes/monitores/monitor-2.png' ,brand: 'Samsung',discount:'25%'},
    { id:12, title: 'Printer', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: 'imagenes/monitores/monitor-4.png',brand: 'Samsung' ,discount:'25%'},
    { id: 13, title: 'Console', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: 'imagenes/monitores/monitor-3.png',brand: 'Samsung',discount:'25%' },
    { id: 14, title: 'Smartphone', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: 'imagenes/monitores/monitor-5.png',brand: 'Samsung',discount:'25%' },
    { id: 15, title: 'Headphones', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: 'imagenes/monitores/monitor-7.png' ,brand: 'Samsung',discount:'25%'},
    { id: 16, title: 'Camera', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'imagenes/monitores/monitor-9.png',brand: 'Samsung' ,discount:'25%'},
    { id: 17, title: 'Smartwatch', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: 'imagenes/monitores/monitor-4.png',brand: 'Samsung' ,discount:'25%'},
    { id: 18, title: 'Tablet', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: 'imagenes/monitores/monitor-2.png',brand: 'Samsung',discount:'25%'},
    { id: 19, title: 'Router', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: 'imagenes/monitores/monitor-3.png',brand: 'Samsung' ,discount:'25%'},
    { id: 20, title: 'Laptop', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: 'imagenes/monitores/monitor-5.png',brand: 'Samsung' ,discount:'25%'},
    { id: 21, title: 'Printer', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: 'imagenes/monitores/monitor-7.png',brand: 'Samsung',discount:'25%' },
    { id: 22, title: 'Console', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: 'imagenes/monitores/monitor-9.png' ,brand: 'Samsung',discount:'25%'},
    { id: 23, title: 'Smartphone', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: 'imagenes/monitores/monitor-8.png',brand: 'Samsung',discount:'25%' },
    { id: 24, title: 'Headphones', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: '' ,brand: 'Samsung',discount:'25%'},
    { id: 25, title: 'Camera', price: '$500', description: 'Digital camera', image: 'camera.jpg',brand: 'Samsung' ,discount:'25%'},
    { id: 26, title: 'Smartwatch', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: '' ,brand: 'Samsung',discount:'25%'},
    { id: 27, title: 'Tablet', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: '',brand: 'Samsung' ,discount:'25%'},
    { id: 28, title: 'Router', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: '',brand: 'Samsung',discount:'25%' },
    // Agregar más productos según sea necesario
];

const brands = [
    'Samsung', 'Apple', 'Sony', 'LG', 'Dell', 'HP', 'Asus', 'Acer', 'Lenovo', 'Microsoft'
];

const processors = [
    'Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Apple M1', 'Apple M2'
];

const productsPerPage = 10;
let currentPage = 1;
let filteredProducts = [...products];

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
        li.addEventListener('click', () => filterByBrand(brand));
        brandList.appendChild(li);
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
                li.addEventListener('click', () => filterByBrand(item));
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

function filterByBrand(brand) {
    filteredProducts = products.filter(product => product.brand === brand);
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
                   product.brand.toLowerCase().includes(searchQuery) 
                 
        });
        currentPage = 1;
        displayProducts(currentPage);
        updatePaginationButtons();
    });
}

// Inicializar la visualización de productos y filtros
displayProducts(currentPage);
addSearchListener()
updatePaginationButtons();
displayFilters();
