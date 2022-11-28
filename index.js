// function handleclick(){
//
// }
// can also do the same thing using the eventlistner but that way is not so good for me because I do this very easily using onclick.
// <button type="button" onClick="window.location.reload()">
//    Reload Page
// </button> This is the button for externally put that So to reload the site
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      var buttonInnerHTML = this.innerHTML;
      // if(buttonInnerHTML == a)
      // {
      //   var audio2 = new Audio("guitar.mp3");
      //   audio2.play();
      // }else
      // if(buttonInnerHTML == 'w')
      // {
      //   var audio1 = new Audio("Drums.mp3");
      //   audio1.play();
      // }else
      // if(buttonInnerHTML == 's')
      // {
      //   var audio3 = new Audio("drum.mp3");
      //   audio3.play();
      // }else
      // if(buttonInnerHTML == 'd')
      // {
      //   var audio4 = new Audio("flute.mp3");
      //   audio4.play();
      // }else
      // if(buttonInnerHTML == 'j')
      // {
      //   var audio5 = new Audio("Sitar.mp3");
      //   audio5.play();
      // }else
      // if(buttonInnerHTML == 'k')
      // {
      //   var audio6 = new Audio("Keyboard.mp3");
      //   audio6.play();
      // }else
      // if(buttonInnerHTML == 'l')
      // {
      //   var audio7 = new Audio("Harmonium.mp3");
      //   audio7.play();
      // }
  switch (buttonInnerHTML) {
    case "w":
    var audio1 = new Audio("Drums.mp3");
    audio1.play();
    break;

    case "a":
    var audio2 = new Audio("guitar.mp3");
    audio2.play();
    break;

    case "s":
    var audio3 = new Audio("drum.mp3");
    audio3.play();
    break;

    case "d":
    var audio4 = new Audio("flute.mp3");
    audio4.play();
    break;

    case "j":
    var audio5 = new Audio("Sitar.mp3");
    audio5.play();
    break;

    case "k":
    var audio6 = new Audio("Keyboard.mp3");
    audio6.play();
    break;

    case "l":
    var audio7 = new Audio("Harmonium.mp3");
    audio7.play();
    break;

    default:

  }
  buttonAnimation(buttonInnerHTML);
  }
  );
}
// document.querySelectorAll(body).addEventListener("click", window.location.reload());
document.addEventListener("keypress" ,function(){
  // alert("key is pressed.");
  var x = event.key;
  if(x == 'a' || x == 'A')
  {
    var audio2 = new Audio("guitar.mp3");
    audio2.play();
  }else
  if(x == 'w' || x == 'W')
  {
    var audio1 = new Audio("Drums.mp3");
    audio1.play();
  }else
  if(x == 's' || x == 'S')
  {
    var audio3 = new Audio("drum.mp3");
    audio3.play();
  }else
  if(x == 'd' || x == 'D')
  {
    var audio4 = new Audio("flute.mp3");
    audio4.play();
  }else
  if(x == 'j' || x == 'J')
  {
    var audio5 = new Audio("Sitar.mp3");
    audio5.play();
  }else
  if(x == 'k' || x == 'K')
  {
    var audio6 = new Audio("Keyboard.mp3");
    audio6.play();
  }else
  if(x == 'l' || x == 'L')
  {
    var audio7 = new Audio("Harmonium.mp3");
    audio7.play();
  }
  buttonAnimation(event.key);
}

);

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
  // settimeout is the function to stop the above function in certain given time .

}



// Now I want to make this long code in short by making the sound function that will play the sound and thenafter settimeout so
// that the sound of each key only stays till 5s or more that I want or less also maybe.
