const navItems = document.querySelector('.nav-items');
const openBtn = document.querySelector('#open-nav-btn');
const closeBtn = document.querySelector('#close-nav-btn');

 

openBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    closeBtn.style.display = 'block';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    navItems.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});




// testimonial (SwiperJS)

let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    //   Responsive

    breakpoints:{
        // width > 600px
        600:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }

    }
    });

