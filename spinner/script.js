function rotateFunction() {
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    console.log(deg % 360)
    var rel_deg = deg % 360;
    if (rel_deg < 202.5 && rel_deg > 157.5) {
        console.log("You Win!");
        document.querySelector('#spin').disabled = true;
        console.log("11")
        setTimeout(function() {
    console.log("Inside setTimeout callback");
  console.log("15")
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        console.log("17")
        setTimeout(function() {
    console.log("Inside setTimeout callback");
            console.log("21")
  }, 10000);
        
        
        }, 3000);
        
    }
}


