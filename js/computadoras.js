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
    { id: 1, title: 'Desktop Dell Inspiron 3880', price: '$600', descprice: '$700', description: 'Dell Inspiron 3880 with Intel i5 processor, 8GB RAM, and 1TB HDD. Ideal for everyday computing tasks.', image: 'imagenes/Computadoras/computadoras-1.png', brand: 'Dell', processor: 'Intel i5', discount: '15%' },
    { id: 2, title: 'Desktop HP Pavilion TP01', price: '$700', descprice: '$800', description: 'HP Pavilion TP01 with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for productivity and multitasking.', image: 'imagenes/Computadoras/computadoras-2.png', brand: 'HP', processor: 'Intel i7', discount: '20%' },
    { id: 3, title: 'Desktop Asus ROG Strix GA15', price: '$1000', descprice: '$1100', description: 'Asus ROG Strix GA15 with AMD Ryzen 7 processor, 16GB RAM, and 1TB SSD. Excellent performance for gaming .', image: 'imagenes/Computadoras/computadoras-3.png', brand: 'Asus', processor: 'AMD Ryzen 7', discount: '10%' },
    { id: 4, title: 'Desktop Acer Aspire TC-895', price: '$550', descprice: '$650', description: 'Acer Aspire TC-895 with Intel i5 processor, 12GB RAM, and 512GB SSD. Great for office work and everyday use.', image: 'imagenes/Computadoras/computadoras-4.png', brand: 'Acer', processor: 'Intel i5', discount: '5%' },
    { id: 5, title: 'Desktop Lenovo ThinkCentre M720', price: '$800', descprice: '$900', description: 'Lenovo ThinkCentre M720 with Intel i7 processor, 16GB RAM, and 1TB SSD. Reliable performance for busi.', image: 'imagenes/Computadoras/computadoras-5.png', brand: 'Lenovo', processor: 'Intel i7', discount: '25%' },
    { id: 6, title: 'Desktop Dell XPS 8940', price: '$1200', descprice: '$1300', description: 'Dell XPS 8940 with Intel i9 processor, 32GB RAM, and 1TB SSD. High-end desktop for demanding tasks and gaming.', image: 'imagenes/Computadoras/computadoras-6.png', brand: 'Dell', processor: 'Intel i9', discount: '15%' },
    { id: 7, title: 'Desktop HP Omen 30L', price: '$1300', descprice: '$1400', description: 'HP Omen 30L with AMD Ryzen 9 processor, 32GB RAM, and 1TB SSD. Premium gaming and productivity performance.', image: 'imagenes/Computadoras/computadoras-7.png', brand: 'HP', processor: 'AMD Ryzen 9', discount: '20%' },
    { id: 8, title: 'Desktop Asus VivoPC K31CD', price: '$600', descprice: '$700', description: 'Asus VivoPC K31CD with Intel i5 processor, 8GB RAM, and 1TB HDD. Affordable and efficient for office use.', image: 'imagenes/Computadoras/computadoras-8.png', brand: 'Asus', processor: 'Intel i5', discount: '10%' },
    { id: 9, title: 'Desktop Acer Predator Orion 3000', price: '$1400', descprice: '$1500', description: 'Acer Predator Orion 3000 with Intel i7 processor, 16GB RAM, and 512GB SSD. Powerful desktop .', image: 'imagenes/Computadoras/computadoras-9.png', brand: 'Acer', processor: 'Intel i7', discount: '5%' },
    { id: 10, title: 'Desktop Lenovo Legion T5', price: '$1100', descprice: '$1200', description: 'Lenovo Legion T5 with AMD Ryzen 7 processor, 16GB RAM, and 1TB SSD. High performance .', image: 'imagenes/Computadoras/computadoras-10.png', brand: 'Lenovo', processor: 'AMD Ryzen 7', discount: '25%' },
    { id: 11, title: 'Desktop Dell OptiPlex 7070', price: '$750', descprice: '$850', description: 'Dell OptiPlex 7070 with Intel i5 processor, 16GB RAM, and 256GB SSD. Reliable desktop .', image: 'imagenes/Computadoras/computadoras-11.png', brand: 'Dell', processor: 'Intel i5', discount: '15%' },
    { id: 12, title: 'Desktop HP EliteDesk 800 G5', price: '$900', descprice: '$1000', description: 'HP EliteDesk 800 G5 with Intel i7 processor, 16GB RAM, and 512GB SSD. .', image: 'imagenes/Computadoras/computadoras-12.png', brand: 'HP', processor: 'Intel i7', discount: '20%' },
    { id: 13, title: 'Desktop Asus ProArt PA90', price: '$1600', descprice: '$1700', description: 'Asus ProArt PA90 with Intel i9 processor, 32GB RAM, and 1TB SSD. Ultimate performance for.', image: 'imagenes/Computadoras/computadoras-13.png', brand: 'Asus', processor: 'Intel i9', discount: '10%' },
    { id: 14, title: 'Desktop Acer Nitro 50', price: '$950', descprice: '$1050', description: 'Acer Nitro 50 with AMD Ryzen 5 processor, 16GB RAM, and 512GB SSD. Balanced performance for work and play.', image: 'imagenes/Computadoras/computadoras-14.png', brand: 'Acer', processor: 'AMD Ryzen 5', discount: '5%' },
    { id: 15, title: 'Desktop Lenovo IdeaCentre 5', price: '$700', descprice: '$800', description: 'Lenovo IdeaCentre 5 with AMD Ryzen 7 processor, 12GB RAM, and 512GB SSD. Versatile desktop for home and office.', image: 'imagenes/Computadoras/computadoras-15.png', brand: 'Lenovo', processor: 'AMD Ryzen 7', discount: '25%' },
    { id: 16, title: 'Desktop Dell G5 Gaming Desktop', price: '$1300', descprice: '$1400', description: 'Dell G5 Gaming Desktop with Intel i7 processor, 16GB RAM, and 1TB SSD. .', image: 'imagenes/Computadoras/computadoras-11.png', brand: 'Dell', processor: 'Intel i7', discount: '15%' },
    { id: 17, title: 'Desktop HP Envy Desktop', price: '$1000', descprice: '$1100', description: 'HP Envy Desktop with Intel i5 processor, 12GB RAM, and 1TB HDD. Stylish and efficient for multimedia .', image: 'imagenes/Computadoras/computadoras-12.png', brand: 'HP', processor: 'Intel i5', discount: '20%' },
    { id: 18, title: 'Desktop Asus Zen AiO 24', price: '$1100', descprice: '$1200', description: 'Asus Zen AiO 24 with Intel i7 processor, 16GB RAM, and 512GB SSD. Sleek all-in-one design for home.', image: 'imagenes/Computadoras/computadoras-13.png', brand: 'Asus', processor: 'Intel i7', discount: '10%' },
    { id: 19, title: 'Desktop Acer ConceptD 500', price: '$1500', descprice: '$1600', description: 'Acer ConceptD 500 with Intel i9 processor, 32GB RAM, and 1TB SSD. High-end desktop .', image: 'imagenes/Computadoras/computadoras-14.png', brand: 'Acer', processor: 'Intel i9', discount: '5%' },
    { id: 20, title: 'Desktop Lenovo Yoga A940', price: '$1800', descprice: '$1900', description: 'Lenovo Yoga A940 with AMD Ryzen 9 processor, 32GB RAM, and 1TB SSD. Powerful all-in-one .', image: 'imagenes/Computadoras/computadoras-5.png', brand: 'Lenovo', processor: 'AMD Ryzen 9', discount: '25%' },
];

const brands = [
    'Dell', 'HP', 'Asus', 'Acer', 'Lenovo', 
];

const processors = [
  'Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Apple M1', 'Apple M2'
];


const productsPerPage = 6;
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
// bsuqeda 
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

