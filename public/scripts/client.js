/** 
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
  
 /**
 * Using jQuery to construct new elements using $ function
 * @param {object} tweets 
 */
  const createTweetElement = function(tweet) {
    const $tweet = $(`
    <article id="tweet">
        <header class="tweet-header">
          <p><i class="fa-solid fa-user"></i>${tweet.user.name}</p>
          <p class="tweet-header-handle">${tweet.user.handle}</p>
        </header>
        <p class="tweet-text">${tweet.content.text}</p>
        <hr>
        <footer class="tweet-footer">
          <p class="tweet-footer-info">${formatTimestamp(tweet.created_at)}</p>
          <div class="tweet-footer-icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
    return $tweet;
  };

 /**
 * Taking an array of tweet objects & appending each to #tweets-container
 */
  const renderTweets = function(tweets) {
    $("#tweets-container").empty();
    for(let tweet of tweets) {
      const value = createTweetElement(tweet);
      $("#tweets-container").prepend(value);
    }
  };

 /**
  * responsible for fetching tweets from /tweets page
  */
  const loadTweets = function() {
    $.get("/tweets")
    .then(res => {
      renderTweets(res);
      //console.log(res);
    })
    .catch (err => {
      console.log(err);
    })
  };
  loadTweets();

 /**
 * function to convert timestamp into days ago
 */
  const formatTimestamp = function(timestamp) {
  // Get the current date and time
    const now = new Date();

    // Convert the timestamp to a Date object
    const date = new Date(timestamp);

    // Calculate the time difference in milliseconds
    const timeDiff = now.getTime() - date.getTime();

    // Convert the time difference to days
    const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Use the timeago library to format the result
    const formattedDate = timeago.format(date);
    return formattedDate;
  };

  //renderTweets(data);

  $("#tweet-text").on("input", function() {
    
  });
  
  $(".formclass").on("submit", function(event) {
    event.preventDefault();
  
    var inputLength = $("#tweet-text").val().length;
  
    if (inputLength === 0) {
      alert("You cannot post an empty tweet");
    } else if (inputLength > 140) {
      alert("Tweet shouldn't have more than 140 characters");
    } else {
      const data = $(".formclass").serialize();
      $.post("/tweets", data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  })


  $("#tweet").on("mouseenter", function() {
    $(this).addClass("hover");
  });
  $("#tweet").on("mouseleave", function() {
    $(this).removeClass("hover");
  });
  $(".tweet-footer-icons i").on("mouseenter", function() {
    //console.log(this);
    $(this).addClass("hovered");
  });
  $(".tweet-footer-icons i").on("mouseleave", function() {
    $(this).removeClass("hovered");
  });
});
