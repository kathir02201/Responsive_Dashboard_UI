const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
});