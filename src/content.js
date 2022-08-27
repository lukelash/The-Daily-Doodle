


function ChangeBackgroundColor() {
  // Pastel colors for the page background
  let pastelColors = [
    "#D7ECD9", // green
    "#F5D5CB", // rose
    "#D5D6EA", // purple
    "#F6ECF5", // lavender
    "#C2DDE6", // lighter blue
    "#BCCBDE", // darker blue
    "#F6E3D4", // champagne
    "#FFBEBC" // orange
  ];

  const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  document.getElementById("doodle-container").style.backgroundColor = randomColor;
}

function FetchRedditURLs(reddit_url) {

  var allURLs = [];

  fetch(reddit_url).then((response) => response.json()) 
          .then((data) => {
              var payload = data.data.children;

              var filetypes = [".jpg", ".png"];

              for (let i = 0; i < payload.length; i++) {
                var url = payload[i].data.url;
                if ( filetypes.includes( url.slice(url.length - 4, url.length) )) {
                  allURLs.push(payload[i].data.url);
                }
              }

              //return allURLs;
});

  console.log("Fetched and returned urls");

  return allURLs;

}

// https://developer.chrome.com/docs/extensions/reference/storage/

window.onload = () => {

  ChangeBackgroundColor(); // this can go anywhere

  const reddit_url = 'https://reddit.com/r/GoldenDoodles/top.json';
  var allURLs = [];
  var allTitles = [];

  fetch(reddit_url).then((response) => response.json()) 
          .then((data) => {
              var payload = data.data.children;
              console.log(payload);

              var filetypes = [".jpg", ".png"];

              for (let i = 0; i < payload.length; i++) {
                var url = payload[i].data.url;
                if ( filetypes.includes( url.slice(url.length - 4, url.length) )) {
                  allURLs.push(payload[i].data.url);
                  allTitles.push(payload[i].data.title)
                }

                // Print out all filenames for visibiliy
                console.log(payload[i].data.url);
              }

              let randomNum = Math.floor(Math.random()*allURLs.length);
              // var randomImage = allURLs[randomNum];
              document.getElementById("doodle-image").src = allURLs[randomNum];
              document.getElementById("doodle-p").innerHTML = allTitles[randomNum];

              //return allURLs;
});


// var key = "keytest";
// var value = "valuetest";

// chrome.storage.local.set({key:value}, function() {
//   console.log("set the testkey and testvalue");
// });

// var output;

// chrome.storage.local.get(key, function(fetchedData) {
//   output = fetchedData.key;
// });

// console.log('Value currently is ' + output);

var img = document.getElementById("doodle-image");

img.addEventListener("click", function() { location.reload(); })

};
