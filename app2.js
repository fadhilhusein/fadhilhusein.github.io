const arrow = document.getElementById("btn");
const hamburger = document.querySelector('header .hamburger');
const mobile_menu = document.querySelector('header ul');
const menu_item = document.querySelectorAll('header ul li a');
const header = document.querySelector('header');

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