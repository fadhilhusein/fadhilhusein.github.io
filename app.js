const arrow = document.getElementById("btn");
const hamburger = document.querySelector('header .hamburger');
const mobile_menu = document.querySelector('header ul');
const menu_item = document.querySelectorAll('header ul li a');
const header = document.querySelector('header');

function imgSlider(any){
    document.querySelector('.breads').src = any;
}
function textSlider(txt){
    document.querySelector('.type').textContent = txt;
}

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.addEventListener('scroll',()=>{
    var scroll = window.scrollY;
    if(scroll > 250){
        arrow.style.opacity = "1";
    }else{
        arrow.style.opacity = "0";
    }
})
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#3A3845";
    }else{
        header.style.backgroundColor = "transparent";
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
    targets: ".textBx,.imageBx,.content"
  });