const log = console.log;

let car1 = {
    brand: "Kia",
    model: "Rio",
    year: 2015
};
let car2 = {
    brand: "Kia",
    model: "Sportage",
    owner: "Olena Plaskonis"
};
let car3 = { ...car1, ...car2 };

log (car3);