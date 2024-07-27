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
    { id: 1, title: 'Notebook Lenovo IdeaPad 3i', price: '$500', descprice: '$600', description: 'Notebook Lenovo IdeaPad 3i with Intel i5 processor, 8GB RAM, and 256GB SSD. Ideal for office tasks.', image: 'imagenes/notebooks/notebooks-1.png', brand: 'Lenovo', processor: 'Intel i5', discount: '15%' },
    { id: 2, title: 'Laptop HP Pavilion x360', price: '$700', descprice: '$800', description: 'HP Pavilion x360 convertible laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for productivity.', image: 'imagenes/notebooks/notebooks-2.png', brand: 'HP', processor: 'Intel i7', discount: '20%' },
    { id: 3, title: 'Notebook Dell Inspiron 14', price: '$600', descprice: '$700', description: 'Dell Inspiron 14 with AMD Ryzen 5 processor, 8GB RAM, and 256GB SSD. Excellent for everyday computing tasks.', image: 'imagenes/notebooks/notebooks-3.png', brand: 'Dell', processor: 'AMD Ryzen 5', discount: '10%' },
    { id: 4, title: 'Laptop Acer Aspire 5', price: '$550', descprice: '$650', description: 'Acer Aspire 5 with Intel i3 processor, 8GB RAM, and 1TB HDD. Great for basic office work and browsing.', image: 'imagenes/notebooks/notebooks-4.png', brand: 'Acer', processor: 'Intel i3', discount: '5%' },
    { id: 5, title: 'Notebook Asus VivoBook 15', price: '$650', descprice: '$750', description: 'Asus VivoBook 15 with Intel i5 processor, 12GB RAM, and 512GB SSD. Good performance for multitasking and office apps.', image: 'imagenes/notebooks/notebooks-5.png', brand: 'Asus', processor: 'Intel i5', discount: '25%' },
    { id: 6, title: 'Laptop HP Envy 13', price: '$900', descprice: '$1000', description: 'HP Envy 13 with Intel i7 processor, 16GB RAM, and 1TB SSD. High-end notebook for demanding office tasks.', image: 'imagenes/notebooks/notebooks-6.png', brand: 'HP', processor: 'Intel i7', discount: '15%' },
    { id: 7, title: 'Notebook Lenovo ThinkPad X1', price: '$1200', descprice: '$1300', description: 'Lenovo ThinkPad X1 Carbon with Intel i9 processor, 16GB RAM, and 1TB SSD. Premium performance for business users.', image: 'imagenes/notebooks/notebooks-7.png', brand: 'Lenovo', processor: 'Intel i9', discount: '10%' },
    { id: 8, title: 'Laptop Dell Latitude 7420', price: '$1100', descprice: '$1200', description: 'Dell Latitude 7420 with Intel i7 processor, 16GB RAM, and 512GB SSD. Top choice for professionals and business use.', image: 'imagenes/notebooks/notebooks-8.png', brand: 'Dell', processor: 'Intel i7', discount: '20%' },
    { id: 9, title: 'Notebook Acer Swift 3', price: '$700', descprice: '$800', description: 'Acer Swift 3 with AMD Ryzen 7 processor, 8GB RAM, and 512GB SSD. Lightweight and powerful for office work.', image: 'imagenes/notebooks/notebooks-9.png', brand: 'Acer', processor: 'AMD Ryzen 7', discount: '25%' },
    { id: 10, title: 'Laptop Asus ZenBook 14', price: '$850', descprice: '$950', description: 'Asus ZenBook 14 with Intel i5 processor, 16GB RAM, and 512GB SSD. Ultra-slim design for high mobility and productivity.', image: 'imagenes/notebooks/notebooks-10.png', brand: 'Asus', processor: 'Intel i5', discount: '10%' },
    { id: 11, title: 'Notebook Samsung Galaxy Book', price: '$800', descprice: '$900', description: 'Samsung Galaxy Book with Intel i5 processor, 8GB RAM, and 256GB SSD. Sleek design and performance for office tasks.', image: 'imagenes/notebooks/notebooks-11.png', brand: 'Samsung', processor: 'Intel i5', discount: '20%' },
    { id: 12, title: 'Laptop Microsoft Surface Laptop 4', price: '$1000', descprice: '$1100', description: 'Microsoft Surface Laptop 4 with Intel i7 processor, 16GB RAM, and 512GB SSD. Versatile and powerful for professionals.', image: 'imagenes/notebooks/notebooks-12.png', brand: 'Microsoft', processor: 'Intel i7', discount: '15%' },
    { id: 13, title: 'Notebook HP ProBook 450 G8', price: '$750', descprice: '$850', description: 'HP ProBook 450 G8 with Intel i5 processor, 8GB RAM, and 256GB SSD. Durable and efficient for business use.', image: 'imagenes/notebooks/notebooks-13.png', brand: 'HP', processor: 'Intel i5', discount: '25%' },
    { id: 14, title: 'Laptop Lenovo Yoga 7i', price: '$950', descprice: '$1050', description: 'Lenovo Yoga 7i with Intel i7 processor, 12GB RAM, and 512GB SSD. Convertible design, ideal for multitasking.', image: 'imagenes/notebooks/notebooks-14.png', brand: 'Lenovo', processor: 'Intel i7', discount: '10%' },
    { id: 15, title: 'Notebook Dell XPS 13', price: '$1100', descprice: '$1200', description: 'Dell XPS 13 with Intel i5 processor, 16GB RAM, and 512GB SSD. Ultra-portable and high-performance for business.', image: 'imagenes/notebooks/notebooks-15.png', brand: 'Dell', processor: 'Intel i5', discount: '20%' },
    { id: 16, title: 'Laptop Acer Spin 5', price: '$850', descprice: '$950', description: 'Acer Spin 5 with Intel i7 processor, 8GB RAM, and 512GB SSD. Convertible laptop with excellent performance.', image: 'imagenes/notebooks/notebooks-16.png', brand: 'Acer', processor: 'Intel i7', discount: '15%' },
    { id: 17, title: 'Notebook Asus ExpertBook B9', price: '$1300', descprice: '$1400', description: 'Asus ExpertBook B9 with Intel i9 processor, 16GB RAM, and 1TB SSD. Premium business laptop with top specs.', image: 'imagenes/notebooks/notebooks-17.png', brand: 'Asus', processor: 'Intel i9', discount: '10%' },
    { id: 18, title: 'Laptop HP Spectre x360', price: '$1200', descprice: '$1300', description: 'HP Spectre x360 with Intel i7 processor, 16GB RAM, and 1TB SSD. Convertible and stylish for professional use.', image: 'imagenes/notebooks/notebooks-18.png', brand: 'HP', processor: 'Intel i7', discount: '20%' },
    { id: 19, title: 'Notebook Lenovo Flex 5', price: '$700', descprice: '$800', description: 'Lenovo Flex 5 with AMD Ryzen 5 processor, 8GB RAM, and 256GB SSD. Convertible and budget-friendly office laptop.', image: 'imagenes/notebooks/notebooks-19.png', brand: 'Lenovo', processor: 'AMD Ryzen 5', discount: '25%' },
    { id: 20, title: 'Laptop Dell G3 15', price: '$900', descprice: '$1000', description: 'Dell G3 15 with Intel i5 processor, 8GB RAM, and 512GB SSD. Balanced performance for work and light gaming.', image: 'imagenes/notebooks/notebooks-20.png', brand: 'Dell', processor: 'Intel i5', discount: '15%' },
];

const brands = [
     'Dell', 'HP', 'Asus', 'Acer', 'Lenovo', 
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

