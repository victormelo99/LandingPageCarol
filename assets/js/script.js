//MENU MOBILE
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu');
    btnMenu.style.display = 'none';
    overlay.style.display = 'block';
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu');
    overlay.style.display = 'none';
    btnMenu.style.display = 'block';

});


overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu');
    btnMenu.style.display = 'block';
    overlay.style.display = 'none';

});

//CARROSEL RESULT
const carousel = document.querySelector('.carousel');
firstImg = carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.contentCarrosel i');

let isDragStart = false, isDragggin = false, prevPageX, prevScrollLeft, positionDiff;

const showHidenIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";

}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHidenIcons(), 60); 
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragggin = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX ||  e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHidenIcons();
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragggin) return;
    isDragggin = false;
    autoSlide();
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);

//AUTOMATIC CARROSEL REVIEW

const carouselResult = document.querySelector('.carouselResult');
const firstItem = carouselResult.querySelector('.area-review');
const itemWidth = firstItem.offsetWidth + 65; 

let autoScroll;

carouselResult.style.scrollBehavior = 'smooth';

const smoothScrollToStart = () => {
    const scrollStep = carouselResult.scrollWidth / 60; 
    const interval = setInterval(() => {
        if (carouselResult.scrollLeft <= 0) {
            clearInterval(interval); 
        } else {
            carouselResult.scrollLeft -= scrollStep;
        }
    }, 20); 
};

const startCarousel = () => {
    autoScroll = setInterval(() => {
        carouselResult.scrollBy({ left: itemWidth, behavior: 'smooth' });

        if (carouselResult.scrollLeft + carouselResult.clientWidth >= carouselResult.scrollWidth) {
            clearInterval(autoScroll); 
            setTimeout(() => {
                carouselResult.style.scrollBehavior = 'auto'; 
                smoothScrollToStart();
                setTimeout(startCarousel, 2000); 
            }, 1500); 
        }
    }, 2000);
};
startCarousel();

carouselResult.addEventListener('mouseenter', () => clearInterval(autoScroll));
carouselResult.addEventListener('mouseleave', startCarousel);


