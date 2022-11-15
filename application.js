function darkModeOn(){

    document.body.classList.add("dark-mode");
}

function darkModeOff(){

    document.body.classList.remove("dark-mode");
}


function checkMode() {

    if (darkMode){

        darkModeOn();
    }

    else {

        darkModeOff();
    }

    darkMode = !darkMode;
}

const colourSwitch = document.getElementById("input-colour-switch");
colourSwitch.addEventListener("click", checkMode);


let darkMode = true;
