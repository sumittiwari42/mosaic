/* Author: sumit*/
//setting owl crousal
$(document).ready(function(){
    if(window.innerWidth > 768) {
    $('html, body').animate({
         scrollTop: 1
     }, 1500);
    }
   
    $('.block-collapsible-nav-content').click(function(e) {
    if (e.clientX > $(this).offset().left + 130 &&
        e.clientY < $(this).offset().top + 30) {
          $(this).toggleClass('open-dash');
    }
   });
    
    setInterval(function(){
    $( "div" ).remove( ".fotorama__arr--next" ); 
    $( "div" ).remove( ".fotorama__arr--prev" ); 
    }, 100);
   
    //javascript for desktop product image stuck on scroll
    if(window.innerWidth > 768) {
    // $('.single-product-detail .media').css('position','fixed');
    // var aaa = $('.single-product-detail').height();
    // var aab = window.innerHeight;
    // var sc = aaa - aab;
    // $('.single-product-detail .actions').css('opacity', '0');
    // $('.single-product-detail .actions').css('position', 'fixed');
    // var a = 380;
    // console.log('test' + a);
    // var off_set = a + 200; 

    // $('.single-product-detail .actions').css('opacity', '1');
    // $('.single-product-detail .actions').css('top', off_set+'px');
    }

    //account open and close
    $('.authorization-link').click(function(){
      $('.customer-welcome').toggleClass('account-hide');
    });

    $('#carousel02').owlCarousel({
    loop:true,
    autoplay: true,
    smartSpeed:650,
    margin:25,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        980:{
            items:1
        }
    }
});

  $('#carousel03').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items:4
        },
        1680:{
            items:5
        }
    }
});

  $('#carousel04').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items:4
        },
        1680:{
            items:5
        }
    }
});

  $('#carousel05').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        980:{
            items:1
        }
    }
});

    $('#carousel07').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items:4
        },
        1680:{
            items:5
        }
    }
});

$('#aboutslider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:30,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:1
        },
        980:{
            items:1
        }
    }
});

$('#about').owlCarousel({
    loop:false,
    autoplay: false,
    margin:30,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:2
        },
        768:{
            items:4
        },
        980:{
            items:4
        }
    }
});

var h = $('.single-product-detail').height();
// console.log('see' + h + 'and' + window.innerHeight);
$(window).scrollTop(0);
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    //javascript for desktop product image stuck on scroll
    // var off_set1 = a + 60; 
    var aaa = $('.single-product-detail').height();
    var aab = window.innerHeight;
    var sc = aaa - aab;

    //javascript for mobile button stuck on scroll
    var intViewportHeight = window.innerHeight;
    var psd = $('.single-product-detail').height(); 
    var scrolltot = scroll + intViewportHeight;

   //  if(window.innerWidth > 768 && window.innerHeight < h) {
   //  if(scroll > sc) {
   //    $('.single-product-detail .media').css('position','absolute');
   //    $('.single-product-detail .actions').css('position', 'absolute');
   //     $('.single-product-detail .actions').css('top', off_set1 + 'px');
   //     $('.single-product-detail .media').css('top','30px');
   //  } else {
   //      $('.single-product-detail .media').css('position','fixed');
   //      $('.single-product-detail .media').css('top','160px');
   //      $('.single-product-detail .actions').css('position', 'fixed');
   //       $('.single-product-detail .actions').css('top', off_set + 'px');
   //  } 
   // } else 
   if(window.innerWidth < 769) {
    if(scrolltot > psd){
     $('.single-product-detail').addClass('button-static');
    } else {
        $('.single-product-detail').removeClass('button-static');
    }
    } else {
      // var off_set1 = a + 30;
      // if(window.innerWidth > 1680) {
      //    var off_set1 = a + 220;
      //  }
      // $('.single-product-detail .media').css('position','absolute');
      // $('.single-product-detail .actions').css('position', 'absolute');
      // $('.single-product-detail .actions').css('top', off_set1 + 'px');
   }
  
    if (scroll > 20) {
      $("header").addClass("sticky-header");
      $("header").css('z-index','999');
      $(".category-about-us header").css('z-index','9999');
    }
    else {
      $("header").removeClass("sticky-header");
    }

    
    //javacript for about us scroll
    var w = window.innerWidth;
    // console.log(w);
    if(w < 769){
    if (scroll > 90) {
      $('.drop').css('position','fixed');
      $('.drop').css('top','94px');
      $('.drop').css('padding-top','10px');
    } else {
      $('.drop').css('position','static');
      $('.drop').css('top','0px');
    }
    } else {
        if (scroll > 160) {
        $('.drop').css('position','fixed');
        $('.drop').css('top','140px');
        $('.abt-content').css('padding-top','65px');
      } else {
        $('.drop').css('position','static');
        $('.drop').css('top','0px');
        $('.abt-content').css('padding-top','20px');
      }
    }

if($('.about-wrapper').length > 0) {
 var f = $('#our-story').offset().top;
 var s = $('#legacy').offset().top;
 var t = $('#mission-vision').offset().top;
 var g = $('#gallery').offset().top;
  if(scroll < f ) {
    $('.tab .tab-list').removeClass('active');
    $('.tab .tab-list:nth-child(1)').addClass('active');
    var txt = $('.tab .tab-list:nth-child(1)').text();
     $('.dropdown-toggle').text(txt);
  } else if (scroll > f && scroll < s) {
    $('.tab .tab-list').removeClass('active');
    $('.tab .tab-list:nth-child(2)').addClass('active');
    var txt = $('.tab .tab-list:nth-child(2)').text();
     $('.dropdown-toggle').text(txt);
  } else if (scroll > s  && scroll < t) {
    $('.tab .tab-list').removeClass('active');
    $('.tab .tab-list:nth-child(3)').addClass('active');
    var txt = $('.tab .tab-list:nth-child(3)').text();
     $('.dropdown-toggle').text(txt);
  } else {
    $('.tab .tab-list').removeClass('active');
    $('.tab .tab-list:nth-child(4)').addClass('active');
    var txt = $('.tab .tab-list:nth-child(4)').text();
     $('.dropdown-toggle').text(txt);
  }

}
    
});

  $('.tab .tab-list').click(function(){
    $('.tab .tab-list').removeClass('active');
     if ($(this).hasClass('active')) {
        $(this).removeClass('active');
     } else {
        $(this).addClass('active');
     }
    $cls = $(this).attr('data-atr');
    $total_offset = $cls;
   $('html, body').animate({
         scrollTop: $("#"+$total_offset).offset().top - 240
     }, 1500).delay(500);

    // $('.tab-item').css('display','none');
        var w = window.innerWidth;
    if(w < 769) {
     var txt = $(this).text();
     $('.dropdown-toggle').text(txt);
    } 
  });


    $('.tabs .tab-list-1').click(function(){
    $('.tabs .tab-list-1').removeClass('active');
     if ($(this).hasClass('active')) {
        $(this).removeClass('active');
     } else {
        $(this).addClass('active');
     }
    $cls = $(this).attr('data-atr');
    $('.tab-item-1').css('display','none');
        $('.'+$cls).css('display','inline-block');
  });
  
  $('.tab2 .tab-list2').click(function(){
    $('.tab .tab-list2').removeClass('active');
     if ($(this).hasClass('active')) {
        $(this).removeClass('active');
     } else {
        $(this).addClass('active');
     }
    $cls = $(this).attr('data-atr');
    $('.tab-item2').css('display','none');
    $('.'+$cls).css('display','block');
  });  

  if(window.innerWidth < 769) {
    $('.page-header .wrapper').removeClass('cf');

    $('.drop .tab-list-parent').addClass('dropdown-menu');
  }
  
  $('.accordian .desc').slideUp();
  $('.accordian .desc.active').slideDown();
  $('.accordian-content:first-child h4').addClass('slide-active');
  $('.accordian h4').click(function(){
    $('.accordian .desc').slideUp();
    if($(this).hasClass('slide-active')) {
      $(this).next().slideUp();
      $('.accordian h4').removeClass('slide-active');
    } else {
      $(this).next().slideDown();
      $('.accordian h4').removeClass('slide-active');
      $(this).toggleClass('slide-active');
    }
  });

    $('.btn-default').click(function(){
      $('.dropdown-menu').toggle();
    });

    $('.dropdown-menu .tab-list').click(function(){
      $('.dropdown-menu').hide();
    });

  //mobile account dropdown
   if(window.innerWidth < 769) {
     $('.customer-welcome').next().children('a').removeAttr('href');
     $('.customer-welcome').next().children('a').removeAttr('data-post');
    }
      
    $('.customer-welcome').next().click(function(){
        $(this).toggleClass('account-hide');
     });
});

























