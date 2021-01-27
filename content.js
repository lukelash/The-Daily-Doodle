window.onload = () => {

let image = document.querySelector('img');
let button1 = document.querySelector('#button1'); // left button? TBD...
let button2 = document.querySelector('#button2')// right button?
let button3 = document.querySelector('#button3')// reddit button?

let pastelArray = [
  "#D7ECD9", // green
  "#F5D5CB", // rose
  "#D5D6EA", // purple
  "#F6ECF5", // lavender
  "#C2DDE6", // lighter blue
  "#BCCBDE", // darker blue
  "#F6E3D4", // champagne
  "#FFBEBC" // orange
]

// All doodle images are collected from r/GoldenDoodles
let urlArray = [
  "https://i.redd.it/jeiauos42jd61.jpg",
  "https://i.redd.it/a9ewrhqq1jd61.jpg",
  "https://i.redd.it/d80omv8aild61.jpg",
  "https://i.redd.it/epivdus6mkd61.jpg",
  "https://i.redd.it/s5kpeazp07u41.jpg",
  "https://preview.redd.it/0q57arlvnax51.jpg?width=2438&format=pjpg&auto=webp&s=76ece39f05713f32202778008ce8aa24f84980cf",
  "https://i.redd.it/w6nnraf3zbt51.jpg",
  "https://i.redd.it/12liumpjowv31.png",
  "https://i.redd.it/rul6t3tmgo841.jpg",
  "https://i.redd.it/7b8je1lvv7y51.jpg",
  "https://i.redd.it/kvwqmbw0j6461.jpg",
  "https://i.redd.it/2uycov0ccuy51.jpg",
  "https://i.redd.it/v18v4tfzmrp31.jpg",
  "https://preview.redd.it/no0854gvygs51.jpg?width=3024&format=pjpg&auto=webp&s=de72dd2df005ccb6e1faa2f86568242fe0697080",
  "https://i.redd.it/et8sny6mptv41.jpg",
  "https://i.redd.it/hhou4isndf461.jpg",
  "https://i.redd.it/piuzbyb3f5h21.jpg",
  "https://i.redd.it/g73s583lyu541.jpg",
  "https://i.redd.it/mjcre210y1w51.jpg",
  "https://external-preview.redd.it/Z5B1CFMjdPAmBroFJoXCKMoBmAT0wnaW7aF8Sa65-J4.jpg?auto=webp&s=d19dbebe3bbd4012f4c0aa90e3e90ddb02993a43",
  "https://i.redd.it/60brzk7t6ak41.jpg",
  "https://i.redd.it/anttrghko9c61.jpg",
  "https://i.redd.it/qxpg8zif24o41.jpg",
  "https://i.redd.it/pdu3siwduhp41.jpg",
  "https://i.redd.it/1tksa943jy761.jpg",
  "https://i.redd.it/h0skzry04g041.jpg",
  "https://preview.redd.it/x3mt25wgfy461.jpg?width=3024&format=pjpg&auto=webp&s=d7db951431f6d82c9cd209b88607e56fbb0bc137",
  "https://i.redd.it/anbmq6zfuar41.jpg",
  "https://i.redd.it/lulux4054wc61.jpg",
  "https://i.redd.it/vs51xlbi0xo51.jpg",
  "https://i.redd.it/f7tzwv1ch2h51.jpg",
  "https://i.redd.it/mdlx8tqx4zw21.jpg",
  "https://i.redd.it/04se7fi4pp951.jpg",
  "https://i.redd.it/2z6uc1jxhl061.jpg",
  "https://i.redd.it/0osyoie6w4861.jpg",
  "https://i.redd.it/l1t02d9hfj251.jpg",
  "https://i.redd.it/2vsl5dwo9nb51.jpg",
  "https://i.redd.it/2jplsv3cd0241.jpg",
  "https://i.redd.it/oovved3l5rc61.jpg",
  "https://i.redd.it/ekuf56exp3b61.jpg",
  "https://preview.redd.it/l7qem8wobm461.jpg?width=3024&format=pjpg&auto=webp&s=9b20d4e174dbb913b55b59038fb6358de6df0533",
  "https://i.redd.it/p4cy2ecnthr51.jpg",
  "https://i.redd.it/8kt8w2fodhb51.jpg",
  "https://i.redd.it/o3fygef72lc21.jpg",
  "https://i.redd.it/7f141s4pi2t41.jpg",
  "https://i.redd.it/ofb8qc4lqnc31.jpg",
  "https://i.redd.it/5uqf605lgkj41.jpg",
  "https://i.redd.it/os94cxgmm1a41.jpg",
  "https://external-preview.redd.it/dRED1d7mE4GbidICYuEIMspmk72Fdte_mhpfmVbH7aQ.jpg?auto=webp&s=6c79354e30760102f06cbe65acaf2bd3c8bdd3b7",
  "https://i.redd.it/lbpnh46sdsb41.jpg",
  "https://i.redd.it/vergkzwiii551.jpg",
  "https://i.redd.it/z9ympek8su561.jpg",
  "https://i.redd.it/9yoh0gfie6c61.jpg"// for picking up the next series of links, the link directly to the left here is posted by user u/EpicLifeGaming
]; // stores urls, for now

let randomNum = Math.floor(Math.random() * urlArray.length); // generate random number index for use in indexing the urlArray
image.src = urlArray[randomNum]; // set the images's source to the randomly selected url

var randomPastel = Math.floor(Math.random() * pastelArray.length); // generate random pastel color index for background color changes
document.body.style.backgroundColor = pastelArray[randomPastel]; // set the page background to the randomly selected pastel


/*
setTimeout(function(){
  var randomNum = Math.floor(Math.random() * urlArray.length); // generate random number for use in indexing the urlArray
  img.src = urlArray[randomNum]; // set the images's source to the randomly selected url
}, 5000);
*/

/*
img.addEventListener('click', () => {
  var randomNum = Math.floor(Math.random() * urlArray.length); // generate random number for use in indexing the urlArray
  img.src = urlArray[randomNum]; // set the images's source to the randomly selected url
})
*/


/*
document.getElementById("button3").addEventListener("click", toReddit);

  function toReddit() {
    window.open('https://www.reddit.com/r/Goldendoodles/', '_blank');
  }
*/




}
