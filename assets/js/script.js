//MENU MOBILE

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay');

btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu');
    btnMenu.style.display = 'none';
    overlay.style.display = 'block';
});

menu.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    overlay.style.display = 'none';
    btnMenu.style.display = 'block';
});


overlay.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    btnMenu.style.display = 'block';
    overlay.style.display = 'none';

});

// CARD CARROUSEL MOBILE

document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.btn-next-card');
    const prevButton = document.querySelector('.btn-prev-card');
    const carouselCard = document.querySelector('.carrosel-card');
    let currentIndex = 0;

    function updateCardPosition() {
        const cardWidth = carouselCard.querySelector('.card').offsetWidth + 160;
        carouselCard.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function setPositionByIndex() {
        const cardWidth = carouselCard.querySelector('.card').offsetWidth + 160;
        currentTranslate = -currentIndex * cardWidth;
        prevTranslate = currentTranslate;
        carouselCard.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            if (currentIndex < carouselCard.querySelectorAll('.card').length - 1) {
                currentIndex++;
                updateCardPosition();
            }
        });
    

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCardPosition();
            }
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767.98) {
            carouselCard.style.transform = 'translateX(0)';
            currentIndex = 0;
        }
    });
});

    //CARROSEL RESULT

    const carousel = document.querySelector('.carousel');
    firstImg = carousel.querySelectorAll('img')[0];
    arrowIcons = document.querySelectorAll('.contentCarrosel i');
    
    let isDragStart = false, isDragggin = false, prevPageX, prevScrollLeft, positionDiff;
    
    arrowIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            let firstImgWidth = firstImg.clientWidth + 20;
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
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
    };
    
    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
    
        if(!isDragggin) return;
        isDragggin = false;
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

    let autoScroll;

    const calculateItemWidth = () => {
        const baseWidth = 0;
        if (window.innerWidth <=  991.98) {
            return baseWidth + 20;
        } else if (window.innerWidth >= 1400) {
            return baseWidth+ 100;
        }
    };

    const itemWidth = firstItem.offsetWidth + calculateItemWidth();

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
                    setTimeout(() => {
                        carouselResult.style.scrollBehavior = 'smooth';
                        startCarousel();
                    }, 3000);
                }, 1500);
            }
        }, 2000);
    };
    startCarousel();

    carouselResult.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carouselResult.addEventListener('mouseleave', startCarousel);


