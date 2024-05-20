const log = console.log;

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map ((num, index) => num * index);

log (newNumbers);