const arrow = document.getElementById("btn");
const hamburger = document.querySelector('header .hamburger');
const mobile_menu = document.querySelector('header ul');
const menu_item = document.querySelectorAll('header ul li a');
const header = document.querySelector('header');

document.addEventListener('scroll',()=>{
    var scroll = window.scrollY;
    if(scroll > 250){
        arrow.style.opacity = "1";
    }else{
        arrow.style.opacity = "0";
    }
})

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})

ScrollOut({
    targets: ".cookies,.bread,.cake"
  });