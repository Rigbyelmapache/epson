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
    { id: 1, title: 'Impresora HP Smart TANK 670 Multifuncional', price: '$ 300', descprice:'$ 18000',description: '40 inch HD TV', image: 'imagenes/impresoras/impresora-1.png', brand: 'HP' ,  color:'blanco',discount:'25%'},
    { id: 2, title: 'Impresora HP Smart TANK 580 1F3Y2A', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: 'imagenes/impresoras/impresora-2.png', brand: 'Asus' , color:'blanco',discount:'35%'},
    { id: 3, title: 'Impresora Multifuncional de tinta HP Smart TANK 530', descprice:'$ 18000', price: '$150', description: 'Impresion, Escaneo, Copia', image: 'imagenes/impresoras/impresora-3.png', brand: 'Asus', color:'',discount:'25%' },
    { id: 4, title: 'Impresora  HP Laser Jet Pro MFP 4103fdw Multifuncinal', descprice:'$ 18000', price: '$300', description: 'Gaming console', image: 'imagenes/impresoras/impresora-4.png', brand: 'HP',  color:'blanco',discount:'45%' },
    { id: 5, title: 'Impresora todo en uno HP Desjekt Ink Advantaje 2774', descprice:'$ 18000', price: '$600', description: 'Latest smartphone', image: 'imagenes/impresoras/impresora-5.png', brand: 'Acer', color:'blanco',discount:'55%' },
    { id: 6, title: 'Impresora Lasers JEt Pro m176 17PPM', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: 'imagenes/impresoras/impresora-6.png', brand: 'Dell', color:'',discount:'75%' },
    { id: 7, title: 'Impresora multifuncional HP Laser 432fdn', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'imagenes/impresoras/impresora-7.png', brand: 'Dell', color:'blanco',discount:'25%' },
    { id: 8, title: 'Impresora Mutifuncional CANON G3100', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: 'imagenes/impresoras/impresora-8.png', brand: 'Asus', color:'blanco',discount:'15%' },
    { id: 9, title: 'Impresora Multifuncional CANON Pixma G4110 ', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: 'imagenes/impresoras/impresora-9.png', brand: 'Asus', color:'blanco',discount:'5%' },
    { id: 10,title: 'Impresora Multifuncional CANON G3110 WIFI', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: 'imagenes/impresoras/impresora-10.png', brand: 'HP', color:'blanco' ,discount:'20%'},
    { id: 11, title: 'Impresora Multifuncional Epson Ecotank L3110', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: 'imagenes/impresoras/impresora-11.png' ,brand:'Epson', color :'negro' ,discount:'25%'},
    { id:12, title: 'Impresora Epson L14150', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: 'imagenes/impresoras/impresora-12.png', brand:'Epson' , color :'negro',discount:'28%' },
    { id: 13, title: 'Impresora Epson EcoTank L6270 Multifuncional ', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: 'imagenes/impresoras/impresora-13.png', brand:'Epson' , color:'negro',discount:'255%'},
    { id: 14, title: 'Impresora Borther MFC-J6730DW Multifuncional ', price: '$600', descprice:'$ 18000', description: 'Inyeccion A3', image: 'imagenes/impresoras/impresora-14.png', brand:'Brother',color:'blanco',discount:'250%'},
    { id: 15, title: 'Impresora Laser Borther HL-I3270', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: 'imagenes/impresoras/impresora-15.png',brand:'Brother',color:'blanco',discount:'100%' },
    { id: 16, title: '', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'imagenes/impresoras/impresora-16.png', color:'blanco' , brand: 'HP',discount:'100%'},
    { id: 17, title: '', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: 'imagenes/impresoras/impresora-3.png', color:'blanco', brand: 'HP' },
    { id: 18, title: '', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: ' ',brand:'Epson' , color:'negro',discount:'25%'},
    { id: 19, title: 'Router', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: '', brand:'Epson' , color:'negro',discount:'25%'},
    { id: 20, title: 'Laptop', price: '$800', descprice:'$ 18000', description: '15 inch laptop', image: '', brand:'Epson' , color:'negro',discount:'25%'},
    { id: 21, title: 'Printer', price: '$150', descprice:'$ 18000', description: 'Wireless printer', image: '', color:'blanco', brand: 'HP' },
    { id: 22, title: 'Console', price: '$300', descprice:'$ 18000', description: 'Gaming console', image: '', color:'blanco' , brand: 'HP'},
    { id: 23, title: 'Smartphone', price: '$600', descprice:'$ 18000', description: 'Latest smartphone', image: '' , color:'blanco', brand: 'HP'},
    { id: 24, title: 'Headphones', price: '$100', descprice:'$ 18000', description: 'Noise-cancelling headphones', image: '', color:'blanco', brand: 'HP' },
    { id: 25, title: 'Camera', price: '$500', descprice:'$ 18000', description: 'Digital camera', image: 'camera.jpg', color:'blanco', brand: 'HP' },
    { id: 26, title: 'Smartwatch', price: '$200', descprice:'$ 18000', description: 'Smartwatch with health tracking', image: '', color:'blanco', brand: 'HP' },
    { id: 27, title: 'Tablet', price: '$350', descprice:'$ 18000', description: '10 inch tablet', image: '' , color:'blanco', brand: 'HP'},
    { id: 28, title: 'Router', price: '$120', descprice:'$ 18000', description: 'High-speed router', image: '', color:'blanco', brand: 'HP' , discount:'25%'},
    // Agregar más productos según sea necesario
];

const brands = [
     'Anycubic', 'HP', 'Canon', 'Brother', 'Epson', 
];

const colors = [
   'blanco','negro'
];

const productsPerPage = 5;
let currentPage = 1;
let filteredProducts = [...products];
let selectedBrand = '';
let selectedColor = '';

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

    colors.slice(0, 5).forEach(color => {
        const li = document.createElement('li');
        li.textContent = color;
        li.addEventListener('click', () => {
            selectedColor = color;
            filterProducts();
        });
        processorList.appendChild(li);
    });
}

function toggleShowMore(type) {
    const list = type === 'brand' ? brands : colors;
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
               (selectedColor ? product.color === selectedColor : true);
    });
    currentPage = 1;
    displayProducts(currentPage);
    updatePaginationButtons();
}
// busqeda input 
function addSearchListener() {
    document.getElementById('searchInput').addEventListener('keyup', function() {
        const searchQuery = this.value.toLowerCase();
        filteredProducts = products.filter(product => {
            return product.title.toLowerCase().includes(searchQuery) ||
                   product.description.toLowerCase().includes(searchQuery) ||
                   product.brand.toLowerCase().includes(searchQuery) ||
                   product.color.toLowerCase().includes(searchQuery);
                  
        });
        currentPage = 1;
        displayProducts(currentPage);
        updatePaginationButtons();
    });
}
//iniciallizacion 
displayProducts(currentPage);
updatePaginationButtons();
addSearchListener()
displayFilters();

