window.onload = () => {

  //let b1 = document.querySelector('button1');

//document.getElementsByClassName('style-scope ytd-popup-container').style.height = "RED";

console.log("log out 1");
  document.getElementById('button1').addEventListener("click", myFunction, false)

function myFunction() {

    document.getElementById('button1').style.backgroundColor = 'yellow';
    console.log("log out 2");
    contentFunction();
  }

}
