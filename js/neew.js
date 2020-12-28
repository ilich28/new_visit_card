$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger,.header_menu').toggleClass('active');
    $('.Background').toggleClass('lock');
  });
  
  $('.Block_Work_Title').click(function(event) {
    $('.Block_Work_list,.Block_Work_list2').toggleClass('active');
  });
   $('.hedear_link').click(function(event){
    $('.header_burger,.header_menu').removeClass('active');
    $('.Background').removeClass('lock');
  });
   $( window ).scroll(function() {
  $('.Block_Work_list').removeClass('active');
   $('.Background').removeClass('lock');
 });
   $('#up').click(function() {  
    $('body,html').animate({scrollTop:0},500);  
    return false;  
  })  ;
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
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
  breakpoints: {
    320:{
      slidesPerView:1,
    },
    480:{
      slidesPerView:2,
    },
    992:{
      slidesPerView:3,
    },
  },
});

anime({
  targets:'#demo-svg path',
  strokeDashoffset:[anime.setDashoffset, 0],
  easing:'easeInOutQuad',
  duration:10000,
  direction:'alternate',
  loop:false,
});
