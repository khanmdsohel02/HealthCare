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


