/* Author: 

*/
//setting owl crousal
$(document).ready(function(){
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
    margin:30,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items:4
        }
    }
});

  $('#carousel04').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items:4
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
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        980:{
            items:4
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
    autoplay: true,
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

// $('.dropdown-toggle').text("txt");

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
         scrollTop: $("#"+$total_offset).offset().top - 100
     }, 1500);
    // $('.tab-item').css('display','none');
        var w = window.innerWidth;
    if(w < 768) {
     var txt = $(this).text();
     console.log(txt);
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

  if(window.innerWidth < 769) {
    $('.page-header .wrapper').removeClass('cf');

    $('.drop .tab-list-parent').addClass('dropdown-menu');
  }
  
  $('.accordian p').slideUp();
  $('.accordian p.active').slideDown();
  $('.accordian h4').click(function(){
    $('.accordian p').slideUp();
    $(this).next().slideToggle();
  });

//  $('.tab .tab-list').click(function(){

//     $cls = $(this).attr('data-atr');
//     console.log('ggggggg '+$cls);
//     $('#'+$cls)scrollTop(0);
// });

});

























