$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger,.header_menu').toggleClass('active');
    $('.Background').toggleClass('lock');
  });
  $('.Block_Work_Title').click(function(event) {
    $('.Block_Work_list,.Block_Work_list2').toggleClass('active');
  });
  $('.header_list').click(function(){ // по нажатию на элемент в меню
$(".header_burger").addClass("collapsed") //  бургер
$(".header_menu").removeClass("in") //  меню
});
});

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },
  loop:true,
   autoplay: {
    delay: 3000,
    disableOnInteraction:false,    
  },
  
  slidesPerView:2, 
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
