const log = console.log;

let users = [
    {name: "Ben", email: "Ben@i.ua", age: 21},
    {name: "Bob", email: "Bob@i.ua", age: 22},
    {name: "Tom", email: "Tom@i.ua", age: 31}
];
for (let user of users) {
    let {name, email, age} = user;
    log (name);
    log (email);
    log (age);
}