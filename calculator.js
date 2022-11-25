function sciCalculate(count) {//Eval function for Sci-mode

    index = count.indexOf("+");

    if (index != -1){

        if (index == 0){

            return parseFloat(count);
        }
        
        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return sciCalculate(s1) + sciCalculate(s2);
    }

    index = count.indexOf("-");

    if (index != -1){

        if (index == 0){

            return parseFloat(count);
        }

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return sciCalculate(s1) - sciCalculate(s2);
    }

    index = count.indexOf("X");

    if (index != -1){

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return sciCalculate(s1) * sciCalculate(s2);
    }

    index = count.indexOf("/");

    if (index != -1){

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return sciCalculate(s1) / sciCalculate(s2);
    }

    index = count.indexOf("%");

    if (index != -1){

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return Math.pow(sciCalculate(s2),  1 / sciCalculate(s1));
    }

    index = count.indexOf("^");

    if (index != -1){

        let s1 = count.substring(0, index);
        let s2 = count.substring(index + 1);

        return Math.pow(sciCalculate(s1),  sciCalculate(s2));
    }

    return parseFloat(count);
}


let current = "0";
let operaotr = "";
let operand1 = "";
let operand2 = "";
let display = "0";
let first_operand = true;
let sciMode = false;
let history = [''];
let temp;
let sci = [''];

document.getElementById('screen').innerHTML = current;

function reset() {

    current = '0';
    display = '0';
    operand1 = '';
    operand2 = '';
    operaotr = '';
    first_operand = true;
    history = [''];
    sci = [''];
    document.getElementById("history").innerHTML = history;
}
function isExeption(element) {

    if (element == '^2' || element == '2%'|| (element == ((Math.PI.toFixed(5)) + ''))) {

        return true;
    }

    return false;
}
function press(element){

    if (isDigit(element) || isOperator(element) || isExeption(element)){

        history.push(element);
        sci.push(element);
    }

    if (isDigit(element) || isExeption(element)){

        if (first_operand){

            operand1 += element;
            display = operand1;
        }
        else{

            operand2 += element;
            display = operand2;
        }
    }

    else if (isOperator(element)){

        if (operand2 != ''){

            operand1 = calculate(operand1, operaotr, operand2) + "";
        }        
        operaotr = element;
        display = element;
        first_operand = false;
        operand2 = '';
    }

    else if (element == '='){
    
        if (operand1 != '' && operand2 != ''){

            current = calculate(operand1, operaotr, operand2) + "";
        }
        else if (operand1 == '') {

            current = calculate('0', operaotr, operand2) + "";
        }
        scienceExpression(current);

        display = current;
        operand1 = current;
        operand2 = '';
        first_operand = true;

        if (sciMode) {

            current = sciCalculate(sci.join(''));
            sci = [current];
            current = current.toExponential(4);
            display = current;
        }

        history.push('<br>' + '=' + current + '<br>');
        document.getElementById("history").innerHTML = history.join('');
        history.push(current);

        // alert(current);
    }

    else if (element == 'C'){

        reset();
    }

    else if (element == 'arrow'){

        history.pop();
        sci.pop();

        if (display == operand2){

            operand2 = '';
            display = operaotr;
        }
        else if (display == operaotr){

            operaotr = '';
            display = operand1;
        }
        else{

            operand1 = '';
            operand2 = '';
            display = '0'
            first_operand = true;
        }
    }

    else if (element == "PM") {

        if (operand1 == '' && operand2 == ''){

            return;
        }

        if (first_operand) {

            operand1 = (parseFloat(operand1) * -1) + '';
            display = operand1;
        }

        else if (display == current) {

            current = (parseFloat(current) * -1) + '';
            display = current;
        }

        else if (!isOperator(history[history.length - 1])) {

            operand2 = (parseFloat(operand2) * -1) + '';
            display = operand2;
        }

        changeHistory();
    }

    else if (element == "sci") {

        reset(); //Part 3 => Task 3 => a => iii.
        sciOff();
        sciMode = !sciMode;
    }

    document.getElementById('screen').innerHTML = display;
}

function changeHistory() {

    let i = history.length - 1;

    if (isOperator(history[i])) {

        return;
    }
    while (i > 0) {

        if (!isDigit(history[i]) && !negDigit(history[i])){

            break;
        }

        i--;
    }
    history[i + 1] = (-1 * parseFloat(history[i + 1])) + '';
}

function negDigit(element) {

    let lst = ['-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'];

    for (let i = 0; i < 9; i++) {

        if (element == lst[i]) {

            return true;
        }
    }

    return false;
}

function sciOff() {

    let temp = Number(parseFloat(current));

    if (history[history.length - 1] == current) {

        history[history.length - 1] = temp;
    }

    current = temp;
}

function calculate(operand1, operaotr, operand2){//eval function: Normal-mode

    if (operaotr == "X"){

        return parseFloat(operand1) * parseFloat(operand2);
    }
    else if (operaotr == '/'){

        return parseFloat(operand1) / parseFloat(operand2);
    }
    else if (operaotr == '+'){

        return parseFloat(operand1) + parseFloat(operand2);
    }

    return parseFloat(operand1) - parseFloat(operand2);
}

function isOperator(operator){

    operators = "-+X/^%";

    for (let i = 0; i < operators.length; i++){

        if (operator == operators.charAt(i)){

            return true;
        }
    }

    return false;
}

function isDigit(digit){

    digits = "0123456789.";

    for (let i = 0; i < digits.length; i++){

        if (digit == digits.charAt(i)){

            return true;
        }
    }

    return false;
}

function scienceExpression(number) {

    if (sciMode) {

        current =  parseFloat(number).toExponential(4);
    }
}

