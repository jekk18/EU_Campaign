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
$('#tabs-nav li').mouseenter(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTabId = $(this).find('div').attr('data-tab-id');
    $('#' + activeTabId).fadeIn(); // Show the content with a fade-in effect
    return false;
});

$('#tabs-nav').mouseleave(function(){
    $('.tab-content').hide();
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


 