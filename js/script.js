
        function truncateText(selector, maxWords) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const words = element.innerText.split(' ');
                if (words.length > maxWords) {
                    element.innerText = words.slice(0, maxWords).join(' ') + '...';
                    element.classList.add('truncated-text');
                }
            });
        }
        truncateText('.product-item p', 10);

/*menu flotante*/
// Toggle side menu on button clicks
document.getElementById('btn-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.toggle('open');
});

document.getElementById('btn-categoria').addEventListener('click', function() {
    document.getElementById('side-menu').classList.toggle('open');
});

// Toggle subcategories display
document.querySelectorAll('.slide-menu-title').forEach(item => {
    item.addEventListener('click', () => {
        const subcategories = item.nextElementSibling;
        subcategories.classList.toggle('open'); // Utilizar una clase para mostrar/ocultar subcategorías
    });
});

// Close side menu with close-icon
document.querySelector('.side-menu-header ion-icon').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('open');
});


document.addEventListener("DOMContentLoaded", function() {
    const sideMenuItems = document.querySelectorAll(".side-menu-item");
    
    sideMenuItems.forEach(item => {
        const title = item.querySelector(".slide-menu-title");
        const subcategories = item.querySelector(".subcategories");

        title.addEventListener("click", function() {
            // Remueve la condición de ancho de ventana aquí
            subcategories.style.display = subcategories.style.display === "block" ? "none" : "block";
        });
    });
});


/*document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function updateGallery() {
        galleryItems.forEach((item, index) => {
            item.classList.remove( 'gallery-item-1', 'gallery-item-2', 'gallery-item-3'
            );
            const newIndex = (index + currentIndex) % galleryItems.length;
            item.classList.add(`gallery-item-${newIndex + 1}`);
        });
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateGallery();
    }

    setInterval(moveNext, 3000);

    updateGallery();
});*/
/* descuentos */

/*const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slider input');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    slides[currentSlide].checked = true;
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    slides[currentSlide].checked = true;
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll("#descuento .cartas");
    let currentIndex = 0;
    const totalCards = cards.length;

    function showNextCards(showCards) {
        // Hide all cards first
        cards.forEach(card => card.style.display = "none");

        // Show the next set of cards
        for (let i = 0; i < showCards; i++) {
            const index = (currentIndex + i) % totalCards;
            cards[index].style.display = "block";
        }

        // Update the currentIndex
        currentIndex = (currentIndex + showCards) % totalCards;
    }

    function updateCarousel() {
        const screenWidth = window.innerWidth;
        const showCards = screenWidth < 720 ? 1 : 2;
        showNextCards(showCards);
    }

    // Show the first set of cards initially
    updateCarousel();

    // Set the interval to switch cards every 3 seconds
    setInterval(updateCarousel, 4000);

    // Update carousel on window resize
    window.addEventListener('resize', updateCarousel);
});
*/

/*slider footer */
document.addEventListener("DOMContentLoaded", function() {
    const detalles = document.querySelector(".detalles");
    const itemsDetalles = document.querySelectorAll(".item-detalles");
    const totalItems = itemsDetalles.length;
    let currentIndex = 0;
    let carouselInterval;

    function showNextItem() {
        // Ocultar todos los elementos
        itemsDetalles.forEach(item => item.classList.remove("active"));

        // Mostrar el siguiente elemento
        itemsDetalles[currentIndex].classList.add("active");

        // Actualizar el índice actual
        currentIndex = (currentIndex + 1) % totalItems;
    }

    function updateCarousel() {
        const screenWidth = window.innerWidth;
        const showItems = screenWidth < 720 ? 1 : totalItems; // Mostrar todos los elementos si la pantalla es menor que 720px

        if (screenWidth >= 720) {
            // Mostrar todos los elementos
            itemsDetalles.forEach(item => item.classList.add("active"));

            // Detener el intervalo del carrusel si está activo
            clearInterval(carouselInterval);
        } else {
            // Mostrar solo el siguiente elemento si la pantalla es menor que 720px
            showNextItem();

            // Iniciar o reiniciar el intervalo del carrusel
            clearInterval(carouselInterval);
            carouselInterval = setInterval(showNextItem, 4000);
        }
    }

    // Mostrar el primer elemento inicialmente
    updateCarousel();

    // Actualizar el carrusel al cambiar el tamaño de la ventana
    window.addEventListener('resize', updateCarousel);
});

/* categorias */
class Carousel {
    constructor(element, cardsToShow = 4) {
        this.element = element;
        this.carousel = element.querySelector('.carousel');
        this.cards = this.carousel.querySelectorAll('.card');
        this.currentIndex = 0;
        this.cardsToShow = cardsToShow;

        this.prevButton = element.querySelector('.button:first-child');
        this.nextButton = element.querySelector('.button:last-child');

        this.prevButton.addEventListener('click', () => this.prevCard());
        this.nextButton.addEventListener('click', () => this.nextCard());

        window.addEventListener('resize', () => this.updateCarousel());
        this.updateCarousel();
    }

    updateCarousel() {
        const cardWidth = this.cards[0].offsetWidth;
        this.carousel.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;
    }

    prevCard() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.cards.length - this.cardsToShow;
        this.updateCarousel();
    }

    nextCard() {
        this.currentIndex = (this.currentIndex < this.cards.length - this.cardsToShow) ? this.currentIndex + 1 : 0;
        this.updateCarousel();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => new Carousel(carousel));
});
/* categorias parrafo */


    /* ofertas */ 
    document.addEventListener("DOMContentLoaded", function() {
        const items = document.querySelectorAll(".ofertas-item");
        const itemsPerPage = 4;
        let currentIndex = 0;
    
        function showItems() {
            items.forEach(item => item.classList.remove('show'));
    
            for (let i = 0; i < itemsPerPage; i++) {
                const item = items[(currentIndex + i) % items.length];
                item.classList.add('show');
            }
    
            currentIndex = (currentIndex + itemsPerPage) % items.length;
        }
    
        showItems(); // Show initial items
    
        setInterval(showItems, 4000); // Cycle items every 4 seconds
    });

    /* boton de contactos */
    const menu = document.querySelector(".menu-flotante>i")
const opciones = document.querySelector(".opciones")

menu.addEventListener("click", ()=> {
    opciones.classList.toggle("show")
    if(menu.classList.contains("bx-menu-alt-right")){
        menu.classList.remove("bx-menu-menu-alt-right")
    }else{
        menu.classList.add("bx-menu-alt-right")
    }

})
    /* parte del footer */

    document.addEventListener("DOMContentLoaded", function() {
        const filas = document.querySelectorAll(".fila");
        
        filas.forEach(fila => {
            const header = fila.querySelector(".header");
            header.addEventListener("click", function() {
                // Toggle the 'active' class on the clicked '.fila'
                if (window.innerWidth < 720) {
                    fila.classList.toggle("active");
                }
            });
        });
    });
    

    /* productos.html */
    