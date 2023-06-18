/** 
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function () {

  /**
  * Function to escape user text to prevent XSS attacks
  * @param string
  */
  const escape = function (str) {
    //creates temporary div element
    let div = document.createElement("div");
    //appends a text node(text is treated as plain text not as HTML code)
    div.appendChild(document.createTextNode(str));
    //convert escaped text back to html
    return div.innerHTML;
  };
  
  /**
  * Using jQuery to construct new elements using $ function
  * @param {object} tweets 
  */
  const createTweetElement = function (tweet) {
    const safeHTML = `${escape(tweet.content.text)}`
    const $tweet = $(`
    <article id="tweet">
        <header class="tweet-header">
          <p class="tweet-header-icons">
            <img src="${tweet.user.avatars}" alt="user-icon"> ${tweet.user.name}
          </p>
          <p class="tweet-header-handle">${tweet.user.handle}</p>
        </header>
        <p class="tweet-text"><b> ${safeHTML}</b></p>
        <hr>
        <footer class="tweet-footer">
          <p class="tweet-footer-info">${timeago.format(tweet.created_at)}</p>
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

  function setFocus() {
    var input = document.getElementById("tweet-content");
    input.focus();
  }


  /**
  * Taking an array of tweet objects & appending each to #tweets-container
  */
  const renderTweets = function (tweets) {
    $("#tweets-container").empty();
    for (const tweet of tweets) {
      const value = createTweetElement(tweet);
      $("#tweets-container").prepend(value);
    }
  };

  /**
   * responsible for fetching tweets from /tweets page
  */
  const loadTweets = function () {
    $.get("/tweets")
      .then(res => {
        renderTweets(res);
      })
      .catch(err => {
        console.log(err);
      })
  };

  loadTweets();

  $("#tweet-text").on("input", function () {

  });

  $("#nav-button").on("click", function () {
    $(".new-tweet").slideDown();
    setFocus();  
    $("#form-id").on("submit", function (e) {
      e.preventDefault();
      var inputLength = $("#tweet-content").val().length;
      if (inputLength === 0) {
        var errorMessage = "You cannot post an empty tweet.";
        $("#error-message").text(errorMessage).slideDown("slow");

      } else if (inputLength > 140) {
        var errorMessage = "Tweet shouldn't have more than 140 characters.";
        $("#error-message").text(errorMessage).slideDown("slow");
      } else {
        $("#error-message").slideUp("slow");
        const data = $("#form-id").serialize();
        $.post("/tweets", data)
          .then(res => {
            loadTweets();
            document.getElementById("form-id").reset();
            jQuery(".counter").text("140");
            $(".new-tweet").slideUp();

          })
          .catch(err => {
            console.log(err);
          });
      }
    })
  });
});
