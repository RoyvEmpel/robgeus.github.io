/*Gets triggered on load*/
function banaan() {
    startupdone = false
    setTimeout('Welcome()', 3400);
}

/*Gets triggered 3.4 seconds after the site loads.
           Welcome to my website message         */
function Welcome() {
    document.getElementById("myImage").src='content/Welcome.gif';
    setTimeout('start()', 8500);
}


/*Starts when the `startup` sequence is done.
        Waiting for key press message       */
function start() {
    document.getElementById("myImage").src='content/keyboard.gif';
    setTimeout('startend()', 3000);
}

function startend() {
    document.getElementById("myImage").src='content/keyboardend.png';
    startupdone = true;
}

function keyclick() {
    if (startupdone == true) {
        document.getElementById("myImage").src='content/image1.gif';
    }
}
