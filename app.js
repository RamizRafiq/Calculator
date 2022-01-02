var total = document.getElementById('result');
totalValue = total.value;
if (totalValue == "") {
    result.value = 0;
}

function squareRoot() {
    var total = document.getElementById('result').value;
    result.value = Math.pow(total, 1 / 2);

}
function cubeRoot() {
    var total = document.getElementById('result').value;
    result.value = Math.pow(total, 1 / 3);

}

function cube() {
    var total = document.getElementById('result').value;
    result.value = total * total * total;

}

function square() {
    var total = document.getElementById('result').value;
    result.value = total * total;

}


function getNumber(num) {
    var total = document.getElementById('result');



    if (total.value == 0) {
        total.value = "";
    }
    total.value += num;
}

function removeZero() {
    var total = document.getElementById('result');
    if (total.value == 0) {
        result.value = " ";
    }
}


function clearResult() {

    var total = document.getElementById('result');
    total.value = 0;
}

function getResult() {

    var total = document.getElementById('result');
    total.value = eval(total.value);
}

function Lifo() {

    var total = document.getElementById('result');
    total.value = (result.value).substring(0, (total.value).length - 1);

    if (total.value == "") {
        result.value = 0;
    }
}
