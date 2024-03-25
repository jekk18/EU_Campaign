
$('.reels-slider').slick({
    infinite: true, 
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '75px',
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,  
          centerMode: true,
          centerPadding: '150px',
        }
      },
        {
          breakpoint: 1625,
          settings: { 
            arrows: false,
            centerMode: true,
            centerPadding: '185px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1380,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1250,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '70px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1130,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 870,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '180px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 715,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 530,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 429,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '35px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 391,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '45px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 374,
          settings: {
            arrows: false,
            centerMode: false, 
            slidesToShow: 1
          }
        }
      ]
  });

  $('.articles-slider').slick({
    infinite: true, 
    slidesToShow: 5,
    slidesToScroll: 2,   
    variableWidth: true,
    dots: false,
    arrows: false, 
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,  
            arrows: false,   
          }
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: false, 
            slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false, 
            slidesToShow: 3
          }
        },
        {
          breakpoint: 574,
          settings: {
            arrows: false, 
            slidesToShow: 1,
            slidesToScroll: 1,  
          }
        }
      ]  
  });
  $('.quotes-slider').slick({
    infinite: true, 
    slidesToShow: 3,
    slidesToScroll: 1,  
    variableWidth: true,
    dots: false,
    arrows: false,   
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,  
          arrows: false,   
        }
      },
    ]
  });

$(document).ready(function () { 
    $(".scroll_data_id").on("click", function (event) { 
      let itemId = $(this).children("a").attr("data-id");
      if ($(`#${itemId}`).length > 0) {
        let headerHeight = $(".b-header").outerHeight(); 
        $("html, body").animate(
          {
            scrollTop: $(`#${itemId}`).offset().top - headerHeight,
          },
          300
        );
      }
    });
  });
  
  $(".lang-vector").click(function () {
    $(".lang-box").toggleClass("active-lang-box");
  });



  // Show the first tab and hide the rest 
 
// Click function
$('.relative-container .item').mouseenter(function(){ 
    $('.relative-container .item').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    $('.rec-link').css("opacity", "0")

    var activeTabId = $(this).data('tab-id');  
    $('#' + activeTabId).fadeIn(); 
    return false;
});

$('.relative-container').mouseleave(function(){
    $('.tab-content').hide();
    $('.rec-link').css("opacity", "1")
});

 
$(document).ready(function() {
    // Apply initial styles
    var headSticky = $(".bottom-header");
    var scroll = $(window).scrollTop(); 

    if (scroll > 30) {
        headSticky.css({
            "box-shadow": "0 4px 2px -2px rgba(0, 0, 0, 0.2)",
            "position": "fixed"
        });
    } else {
        headSticky.css({
            "box-shadow": "none",
            "position": "initial"
        });
    }  
    $(window).scroll(function() {
        var headSticky = $(".bottom-header");
        var scroll = $(window).scrollTop(); 

        if (scroll > 30) {
            headSticky.css({
                "box-shadow": "0 4px 2px -2px rgba(0, 0, 0, 0.2)",
                "position": "fixed"
            });
            $('header').css('padding-top', "112px")
            $('.top-header').css('display', "none")

        } else {
            headSticky.css({
                "box-shadow": "none",
                "position": "initial"
            });
            $('header').css('padding-top', "initial")
            $('.top-header').css('display', "block") 
        }
    });
});


$(document).ready(function() {
    $('.reels-item').each(function() {
      var videoUrl = $(this).data('video-url'); // Get video URL from data attribute
      var videoId = videoUrl.split('/').pop(); // Extract video ID
      var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
      $(this).find('img').attr('src', thumbnailUrl);
    });
  });


 $(document).ready(function(){
  $('.tab-list-00 li:first-child').addClass('active');
  $('.tab-c-item').hide();
  $('.tab-c-item:first').show();
   
  $('.tab-list-00 li').click(function(){
    $('.tab-list-00 li').removeClass('active');
    $(this).addClass('active');
    $('.tab-c-item').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
 })


 $(document).ready(function() { 
  $('.nav-menu ul').clone().appendTo('.burger-list');
});

$(document).ready(function() {
  $('.burger-icon').click(function() {
    $(this).toggleClass('active-burger-icon');
    $('.burger-menu').toggleClass('active-burger-menu'); 
  });
});


$(document).ready(function(){
  var startXOffset;
  
  $(".reels-item").on("mousedown", function(event) {
      startXOffset = event.pageX;
  });
  
  $(".reels-item").on("mouseup", function(event) {
    var endXOffset = event.pageX;
    let iframe = $(this).find('.iframe-id');
    let hideEvent = $(this).find('.hide-event');
 
    let src = iframe.attr('src');

    if (startXOffset === endXOffset) { 
        if (src.includes('autoplay=0')) {
            iframe.attr('src', src.replace('autoplay=0', 'autoplay=1'));
            hideEvent.css('height', '80%');
        } else { 
            iframe.attr('src', src.replace('autoplay=1', 'autoplay=0'));
            hideEvent.css('height', '100%');
        }
    } 
});
});

// $(document).ready(function(){
//   var iframe = $('#iframe-id');
     
//   iframe.attr('src', function(i, val) {
//       return val.replace('autoplay=0', 'autoplay=1');
//   });
// });


 
 
  
 