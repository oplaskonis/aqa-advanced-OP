const log = console.log;

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const numbersListNew = numbersList.slice ();
numbersListNew.sort ((a,b) => a-b);

log (numbersList);
log (numbersListNew);