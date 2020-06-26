function calculatorFunc(num) {
    var result = document.getElementById('result');
    result.value += num;
}

function clearbtnWork(){
    var result = document.getElementById('result');
    result.value = "";
}

function resutlFinderFunction(){
    var result = document.getElementById('result');
    result.value = eval(result.value)
}