/** 
 * function runs a callback when DOM is ready to be manipulated with jQuery
*/

$(document).ready(function() {
  $("#tweet-content").on("input", function() {
    //get the value of text-area
    const inputValue = $(this).val();
    const inputLength = inputValue.length;
    //transverse up, find & update the counter with latest value 
    $(this).closest('.new-tweet').find(".counter").text(140 - inputLength);
    if (inputLength > 140) {
      $(this).closest('.new-tweet').find(".counter").addClass("counter-red");
    } else {
      $(this).closest('.new-tweet').find(".counter").removeClass("counter-red");
    }
  });


  $(window).on( "scroll", function() {
    if ($(window).scrollTop() > 300) {
      $('.scroll-top').fadeIn('50');
      $('#nav-button').fadeOut('50');
    } else {
      $('.scroll-top').fadeOut('50');
      $('#nav-button').fadeIn('50');
    }
  });

  $(".scroll-top").on ("click", () => {
    window.scroll(0,0);
    $(".new-tweet").slideDown();
    $("#tweet-content").focus();
    $('')
  });

});

