

function fizzBuzz ( firstNum, secondNum ) {
    for (var i = firstNum; i < secondNum; i++) {

        if (i%3 === 0 && i%5 === 0) {
            document.write('thirty-five <br/>');
        } else if (i%5 === 0) {
            document.write('five')
        } else if (i%3 === 0 ) {
            document.write('tree') 
        } else {
            document.write(i + '<br/>');
        }
        
    
    }
}

fizzBuzz ( 20, 30)

