const log = console.log;

let person = {
    firstName: "Olena",
    lastName: "Plaskonis",
    age: 35
};
person.email = "Olena@i.ua";
delete person.age;

log (person)