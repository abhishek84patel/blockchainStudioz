const hamburgerBtn = document.querySelector('header nav button');
const nav = document.querySelector('header nav ul')
hamburgerBtn.addEventListener("click", () => {
    nav.classList.toggle('show');
})