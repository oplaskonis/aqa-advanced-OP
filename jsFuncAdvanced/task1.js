const log = console.log;

function handleNum (num, evenCallback, oddCallback) {
    if (num%2===0) {
        evenCallback ();
    } else {
        oddCallback ();
    }
   }
   
function handleEven () {
    log ('number is even');
    }

function handleOdd () {
    log ('number is odd');
    }

handleNum(5, handleEven, handleOdd);
handleNum(10, handleEven, handleOdd);