const loginModal = document.querySelector('.login-modal');
const loginBtn = document.querySelector('.login-link');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = "flex";
});

closeBtn.addEventListener('click', (e) => {
    loginModal.style.display = "none";
})