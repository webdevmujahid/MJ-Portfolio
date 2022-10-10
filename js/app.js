let breadcrumb = document.getElementsByClassName("breadcrumb");
let navMenu = document.getElementsByClassName("nav_ul");
breadcrumb[0].addEventListener("click", function(){
    
    breadcrumb[0].classList.toggle("breadcrumb_active");
    navMenu[0].classList.toggle("nav_ul_toggle");
})