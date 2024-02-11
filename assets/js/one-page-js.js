
$('.reels-slider').slick({
    infinite: true, 
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '75px',
    dots: false,
    arrows: false,
    // responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 3
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
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
    $('.rec-link').fadeOut();

    var activeTabId = $(this).data('tab-id');  
    $('#' + activeTabId).fadeIn(); 
    return false;
});

$('.relative-container').mouseleave(function(){
    $('.tab-content').hide();
    $('.rec-link').show();
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
        } else {
            headSticky.css({
                "box-shadow": "none",
                "position": "initial"
            });
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


  
 