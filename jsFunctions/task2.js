const log = console.log;

function checkAge (age) {
    if (age >=18) {
        return true;
    } else {
        return false;
    }
}
log ('чи є особа дорослою: ', checkAge (25));
log ('чи є особа дорослою: ', checkAge (15))