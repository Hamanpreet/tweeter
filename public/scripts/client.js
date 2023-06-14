/** 
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
        <p class="tweet-footer-info">${(tweet.created_at)}</p>
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
    console.log(value);
    $("#tweets-container").prepend(value);
  }
};

/**
 * function to convert timestamp into days ago
 */
const timestamp = function(stamp) {
  return moment().valueOf();
}



renderTweets(data);



    $("#tweet").on("mouseenter", function() {
      $("#tweet").addClass("hover");
    });
    $("#tweet").on("mouseleave", function() {
      $("#tweet").removeClass("hover");
    });
    $(".tweet-footer-icons i").on("mouseenter", function() {
      //console.log(this);
      $(this).addClass("hovered");
    });
    $(".tweet-footer-icons i").on("mouseleave", function() {
      $(this).removeClass("hovered");
    });
});
