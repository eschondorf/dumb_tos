var count = 0;
var snd = new Audio("haha-laugh.mp3");



function func() {
  const counterElem = document.querySelector('#counter');
  console.log(counterElem.innerHTML);
  cont = counterElem.innerHTML;
  const btncolor = document.querySelector('#butn')

  if (cont >= 1){
   counterElem.innerHTML = cont-1;
   count++;
  const blu = 255 - ((666-cont)/666)*255;
  const rd = 255-blu;
  btncolor.style.backgroundColor = "rgb("+rd.toString()+", 0, "+blu.toString()+")";}
  console.log(document.getElementById("butn").innnerHTML)
 if (cont == 1){
   console.log("23, Accepted!", document.getElementById("butn").innnerHTML)
    butn.textContent = 'Accepted!'	;   
   snd.play();
   }
}