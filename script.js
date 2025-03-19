const loginModal = document.querySelector('.login-modal');
const loginBtn = document.querySelector('.login-link');
const closeBtn = document.querySelector('.close-btn');

const sideBar = document.querySelector('.sidebar');
const sideBarOpenBtn = document.querySelector('.open-sidebar')
const sideBarCloseBtn = document.querySelector('.close-sidebar');

// ================== SIDE BAR SECTION ===============
sideBarOpenBtn.addEventListener('click',() => {
    sideBar.style.display = "flex";
});

sideBarCloseBtn.addEventListener('click',() => {
    sideBar.style.display = "none";
});

loginBtn.addEventListener('click', () => {
    loginModal.style.display = "flex";
});

closeBtn.addEventListener('click', (e) => {
    loginModal.style.display = "none";
})