const log = console.log;

function checkOrder (available,ordered) {
    if (ordered === 0) {
        return 'Your order is empty'
    } else if (available < ordered) {
        return 'Your order is too large, we do not have enough goods';
    } else  {
        return 'Your order is accepted';
    }
}
log (checkOrder(5,0));
log (checkOrder(15,5));
log (checkOrder(5,15));
