/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
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

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      createTweetElement(tweet)
      $('#tweets-container').append(createTweetElement(tweet))
    }
  }
  
  const createTweetElement = function(tweet) {
    let $tweet = $(`<div id="tweets-container">
    <article class="containerTweet">
      <header class="articleTweetHeader">
        <div class="articleSeperateHandle"><img class="articleImageTweet" src=${tweet["user"]["avatars"]} > 
        <p>${tweet["user"]["name"]}</p>
      </div>
        <p class="articleIsaacHandle">${tweet["user"]["handle"]}</p>
      </header>
      <p>${tweet["content"]["text"]}</p>
      <footer class="articleTweeterFooter">
        <p class="articleDate">${tweet["created_at"]}</p>
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
  
  renderTweets(data);

  // const loadTweets = function() {
  //   const $button = $('button');
  //   $button.on('click', function () {
  //     console.log('Button clicked, performing ajax call...');
  //     $.ajax('index.html', { method: 'GET' })
  //     .then(function (indexhtml) {
  //       console.log('Success: ', indexhtml);
  //       $button.replaceWith(indexhtml);
  //     });
  //   });
  // }
  // loadTweets()
})

// const triggerTweet = (event) => {
//   event.preventDefault();
//   const formData = $("form").serialize()
//   $ajax({
//     method: "POST",
//     data: formData,
//     url: "/tweets",
//   }).then((res) => createTweetElement(res) )
// }


