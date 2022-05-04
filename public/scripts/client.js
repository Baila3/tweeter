$(document).ready(() => {

  // render tweets function
  const renderTweets = function(tweets) {
    $('#tweet-text').val('');
    $('.counter').val('140');
    for (const tweet of tweets) {
      createTweetElement(tweet);
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  }

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  // createTweetElement function
  const createTweetElement = function(tweet) {
    let $tweet = $(`<div id="tweets-container">
    <article class="containerTweet">
      <header class="articleTweetHeader">
        <div class="articleSeperateHandle"><img class="articleImageTweet" src=${tweet["user"]["avatars"]} > 
        <p>${tweet["user"]["name"]}</p>
      </div>
        <p class="articleIsaacHandle">${tweet["user"]["handle"]}</p>
      </header>
      <p>${escape(tweet["content"]["text"])}</p>
      <footer class="articleTweeterFooter">
        <p class="articleDate">${timeago.format(tweet["created_at"])}</p>
        <div class="articlefoterIcons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  </div>`);
    return $tweet;
  }

  //loadTweet function with ajax
  const loadTweet = function() {
    $.ajax({
      method: "GET",
      url: "/tweets",
      dataType: "json"
    }).then((res) => {
      renderTweets(res)
    })
    .catch(err => { console.log(err) });
  }

  // triggerTweet function
  const triggerTweet = ( event ) => {
    event.preventDefault();
    if ($("#tweet-text").val() === "" || $("#tweet-text").val() === null ) {
    return  $('#message1').addClass("errorMesg")
   } else if ($("#tweet-text").val().length > 140) {
     return $('#message2').addClass("errorMesg")
   }
   $('#message1').removeClass("errorMesg")
   $('#message2').removeClass("errorMesg")
    const formData = $("form").serialize()
    $.post("http://localhost:8080/tweets", formData, () => { loadTweet() });
  }

  // submit form
  $("form").submit(triggerTweet)
  //loadTweet call
  loadTweet()
})