const hamburger = document.querySelector('header .hamburger');
const mobile_menu = document.querySelector('header ul');
const menu_item = document.querySelectorAll('header ul li a');

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