const colourSwitch = document.getElementById("input-colour-switch");
colourSwitch.addEventListener("click", checkMode);

document.getElementById("operationLog").style.display = "none";
document.getElementById("history").style.display = "none";
document.body.classList.add("hide-sicence-grid");

document.getElementById("sci").addEventListener('click', sci_hidden);

let darkMode = true;
let show = true;
let sciShow = true;

function info(){

    alert("Developer: Barr Grace\nCalculator Version: 1.0.0\nShort Description: This app will alow you to calculate.");
}
function checkMode() {

    if (darkMode){

        document.getElementById('screen').style.backgroundColor = 'yellow';
        document.getElementById('input-colour-switch').style.backgroundColor= 'orange';
    }
    else {

        document.getElementById('screen').style.backgroundColor = '';
        document.getElementById('input-colour-switch').style.backgroundColor = '';
    }
    darkMode = !darkMode;
}
function show_hidden() {

    if (show){

        document.getElementById("operationLog").style.display = "flex";
        document.getElementById("history").style.display = "flex";
        document.getElementById("modes").style.backgroundColor = "orange";
        
    }
    else {

        document.getElementById("operationLog").style.display = "none";
        document.getElementById("history").style.display = "none";
        document.getElementById("modes").style.backgroundColor = "";
    }
    show = !show;
}
function sci_hidden() {

    if (sciShow){

        document.body.classList.remove("hide-sicence-grid");
        document.getElementById('sci').style.backgroundColor = "orange";
    }
    else {
        
        document.body.classList.add("hide-sicence-grid");
        document.getElementById('sci').style.backgroundColor = "";
    }
    sciShow = !sciShow;
}

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

let M = urlParams.get('Mode');
let colour = urlParams.get('colour');
let font = urlParams.get('font');

if (font == 'italic') {

    document.body.style.fontStyle = 'italic';
}
else if (font == 'Lucida Sans') {

    document.body.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
}
else if (font == 'Courier New'){

    document.body.style.fontFamily = "'Courier New', Courier, monospace";
}
else if (font = 'Georgia') {

    document.body.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
}
else {

    document.body.style.fontStyle = 'normal';
}

if (colour == 'gray') {

    document.body.classList.add('gray')
}
else if (colour == 'blue') {

    document.body.classList.add('blue');
}
else if (colour == 'red') {

    document.body.classList.add('red')
}
else if (colour == 'green') {

    document.body.classList.add('green')
}
else if (colour == 'purple') {

    document.body.classList.add('purple');
}
else {

    document.body.classList.add('normal');
}

if (M == 'on'){

    document.body.classList.add('dark-mode');
}
else {

    document.body.classList.remove('dark-mode');
}
