/** 
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
  <article class="tweet">Hello World</article>
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
    $("#tweets-container").append(value);
  }
}

renderTweets(data);


$(document).ready(function(event) {
    $("#tweets-container").mouseenter(function() {
      $(this).addClass("hover");
    });
    $("#tweets-container").mouseleave(function() {
      $(this).removeClass("hover");
    });
    $(".tweet-footer-icons i").mouseenter(function() {
      $(this).addClass("hovered");
    });
    $(".tweet-footer-icons i").mouseleave(function() {
      $(this).removeClass("hovered");
    });
});
