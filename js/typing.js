var i = 0;
var txt = 'MSDOS: ';

var y = 0;
var txt2 = 'Welcome to a test. ';

var o = 0;
var txt3 = 'This is a test.';

var speed = 75;

tekst

function startup() {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(startup, 100);
    setTimeout(idle, 2000);
    idling = true;
}

function idle() {
    if(idling == true){
        document.getElementById("demo").innerHTML = 'MSDOS: _';
        setTimeout(idle, 1000);
        document.getElementById("demo").innerHTML = 'MSDOS:  ';
        setTimeout(idle, 1000);
        idle();
    }
}

function lineodn() {
  if (o < txt3.length) {
    document.getElementById("content").innerHTML += txt3.charAt(o);
    o++;
    setTimeout(lineodn, 170);
  }
}

