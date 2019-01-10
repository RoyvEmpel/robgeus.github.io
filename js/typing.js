var i = 0;
var x = 0;
var y = 0;
var k = 0;

var txt = 'MSDOS: ';
var welcometxt = 'Welcome to my website!';
var welcometxt2 = 'This is the place where I will tell your what I learned at my college.';
var welcometxt3 = 'So lets go and look at my progress.';
var speed = 75;
var idlex = 0;
var idle_1 = 'MSDOS:_'
var idle_2 = 'MSDOS: '

var knipperspeed = 400;

var test = true;
var welcome_2_0 = true;
var welcome_3_0 = true;



function startup() {
  if (i < txt.length) {
    document.getElementById("dos").innerHTML += txt.charAt(i);
    i++;
    setTimeout(startup, speed);
    
  }else if (i = txt.length) {
      idle();
      setTimeout(welcome, 4000);
  }
  
}

function idle() {
    if (test == true){
        document.getElementById("dos").innerHTML = idle_1;
        setTimeout(idle2, knipperspeed);

    }else if(idlex > 0){
        document.getElementById("dos").innerHTML = txt;
        idlex++;
    }
    
}

function idle2(){
    if (test == true){
        document.getElementById("dos").innerHTML = idle_2;
        setTimeout(idle, knipperspeed);
    }
}

function welcome(){
    test = false;
    if (x < welcometxt.length) {
        document.getElementById("dos").innerHTML += welcometxt.charAt(x);
        x++;
        setTimeout(welcome, speed);

    }else{
        setTimeout(welcome_2, 1000);
    } 
}

function welcome_2(){
    if (welcome_2_0 == true){
        document.getElementById("dos").innerHTML = txt;
        welcome_2_0 = false;
        welcome_2();
    }else if (y < welcometxt2.length) {
        document.getElementById("dos").innerHTML += welcometxt2.charAt(y);
        y++;
        setTimeout(welcome_2, speed);
    }else{
        setTimeout(welcome_3, 1000);
    } 
    
}
 
function welcome_3(){
    if (welcome_3_0 == true){
        document.getElementById("dos").innerHTML = txt;
        welcome_3_0 = false;
        welcome_3();
    }else if (k < welcometxt3.length) {
        document.getElementById("dos").innerHTML += welcometxt3.charAt(k);
        k++;
        setTimeout(welcome_3, speed);
    }
}