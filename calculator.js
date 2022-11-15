function calculate(count) {

    index = count.indexOf("+");

    if (index != -1){

        if (index == 0){

            return parseFloat(count);
        }

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return calculate(s1) + calculate(s2);
    }

    index = count.indexOf("-");

    if (index != -1){

        if (index == 0){

            return parseFloat(count);
        }

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return calculate(s1) - calculate(s2);
    }

    index = count.indexOf("X");

    if (index != -1){

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return calculate(s1) * calculate(s2);
    }

    index = count.indexOf("/");

    if (index != -1){

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return calculate(s1) / calculate(s2);
    }

    return parseFloat(count);
}



function info(){

    alert("Developer: Barr Grace\nCalculator Version: 1.0.0\nShort Description: This app will alow you to calculate.");
}

function press(number){
    

    if (restart || count == '0'){

        count = '';
        restart = false;
    }
    
    if (number == 'C'){

        count = '0'
    }
    else if (number == '='){

        count = calculate(count) + "";
        restart = true;

    }
    else if (number == "arrow"){

        count = count.slice(0, count.length - 1);

        if (count == '') {

            count = '0';
        }
    }
    else {

        count = count + number;
    }

    
    document.getElementById("screen").innerHTML = count;
}


let count = "0";
let restart = true;
document.getElementById("screen").innerHTML = count;