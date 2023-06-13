/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(event) {
    $(".tweet-one").mouseenter(function() {
      $(this).addClass("hover");
    });
    $(".tweet-one").mouseleave(function() {
      $(this).removeClass("hover");
    });
    $(".three-icons i").mouseenter(function() {
      $(this).addClass("hovered");
    });
    $(".three-icons i").mouseleave(function() {
      $(this).removeClass("hovered");
    });
});
