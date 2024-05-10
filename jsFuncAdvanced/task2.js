const log = console.log;

function count (num) {
    log (num);
    if (num <=0) {
        return;
    } else {
        count (--num)
    }
}

count(5)