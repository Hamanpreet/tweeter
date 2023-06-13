/** 
 * function runs a callback when DOM is ready to be manipulated with jQuery
*/
$(document).ready(function() {
  $("#tweet-text").on("input",function() {
    //get the value of text-area
    var inputValue = $(this).val();
    var inputLength = inputValue.length;
    //transverse up, find & update the counter with latest value 
    $(this).closest('.new-tweet').find(".counter").text(140 - inputLength);
    if (inputLength > 140) {
      $(this).closest('.new-tweet').find(".counter").addClass("counter-red");
    } else {
      $(this).closest('.new-tweet').find(".counter").removeClass("counter-red");
    }
  });
});

// //specify the DOM node to reference using the document.getElementById method and put that reference in a variable
// const box = document.getElementById("tweet-text");

// // when box is clicked, run the function
// box.addEventListener("click", () => {
//   console.log("You clicked on box.");
// });

