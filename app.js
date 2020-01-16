var first__value = document.getElementById("first__value");
var second__value = document.getElementById("second__value");
var display = document.getElementById("content");

function fizzBuzz ( firstNum, secondNum ) {
    for (var i = firstNum; i < secondNum; i++) {
        if (i%3 === 0 && i%5 === 0) {
            display.innerHTML += 'thirty-five <br/>';
        } else if (i%5 === 0) {
            display.innerHTML += 'five <br/>';
        } else if (i%3 === 0 ) {
            display.innerHTML += 'tree  <br/>';
        } else {
            display.innerHTML += i + '<br/>';
        }
    }
}


function submitInput () {
    fizzBuzz(first__value.value, second__value.value)
}

