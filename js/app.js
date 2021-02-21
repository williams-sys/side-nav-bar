
//active on scrolling start
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});
//active on scrolling end






//side bar toggle function start
$(".show-sidebar-btn").click(function () {
    $(".header-ph").animate({right:0});
});

$(".hide-sidebar-btn").click(function () {
    $(".header-ph").animate({right:"-100%"});
});
//side bar toggle function end


//side bar to normal start
$(".home").click(function () {
    console.log("hello");
    $(".header-ph").animate({right:"-100%"});
});
$(".about").click(function () {
    $(".header-ph").animate({right:"-100%"});
});
$(".services").click(function () {
    $(".header-ph").animate({right:"-100%"});
});
$(".blog").click(function () {
    $(".header-ph").animate({right:"-100%"});
});
//side bar to normal end


window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 500;
    header.classList.toggle('scrolling-active', windowPosition);
})