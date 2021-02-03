$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger,.header_menu').toggleClass('active');
    $('.Background').toggleClass('lock');
    $('.top,.topf').toggleClass('active');
    $('.Block_Work_list2').removeClass('active');
  });
       var form1 = new ProcessForm();
        form1.init();

    });


  $('.Block_Work_Title').click(function(event) {
    $('.Block_Work_list,.Block_Work_list2').toggleClass('active');
  });
   $('.hedear_link').click(function(event){
    $('.header_burger,.header_menu').removeClass('active');
    $('.Background').removeClass('lock');
    $('.top,.topf').removeClass('active');
  });
   $( window ).scroll(function() {
  $('.Block_Work_list').removeClass('active');
   $('.Background').removeClass('lock');
   $('.top,.topf').removeClass('active');1
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
 $(window).scroll(function(){
    if  ($(window).scrollTop() > 300)
        $('.top').animate({'right':'15px'},500);
        else
        $('.top').stop(true).animate({'right':'-230px'},500);   
    });
 $(window).scroll(function (event) {
    var top = $(window).scrollTop();
     if(top >= 340){$('.topf').addClass('fall');
       
     } else {
      $('.topf').removeClass('fall');
     }
});
 $(document).ready(function() {

   $('.fa-cloud,.fa-html5,.fas,.fa-file-code,.fa-css3-alt,.fa-wordpress-simple,.layer,.fa-js-square,.fa-sticky-note,.fa-laptop,.fa-mobile-alt,.fa-desktop,.fa-php,.fa-pied-piper-square,.fa-brain,.fa-chart-line,.fa-code,.fa-cloud').addClass('active');
});
$(document).ready(function(){


  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    smartBackspace: true,
    backSpeed: 30,
    typeSpeed: 50,
    startDelay: 10,
    backDelay: 5000, // пауза перед удалением текста
    loop : true , 
    loopCount : Infinity ,

  });
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene,{
      relativeInput: true,
      clipRelativeInput: true, 
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
var changes = 0;
anime({
  targets:'.svg1',
  strokeDashoffset:[anime.setDashoffset, 0],
  easing:'easeInOutQuad',
  duration:10000,
  direction:'alternate',
  loop:false,
});
anime({
  targets:'.svg2',
  strokeDashoffset:[anime.setDashoffset, 0],
  easing:'easeInOutQuad',
  duration:10000,
  direction:'alternate',
  loop:true,
});
anime({
  targets:'.svg3',
  strokeDashoffset:[anime.setDashoffset, 0],
  easing:'easeInOutQuad',
  duration:20000,
  direction:'alternate',
  loop:true,
});

anime({
  targets: '.fa-angle-double-up',
  translateY: 3,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});




var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
    
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var listItems = document.querySelectorAll(".content,.table,.money");
    var listItems1 = document.querySelectorAll(".content,.table,.money");

  
    function scrolling(e) {
    for (var i = 0; i < listItems1.length; i++) {
        var listItem = listItems1[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } 
      }
    }
 
          for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } 
      }


 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    };
 