const arrProm = [];

for (let i = 1; i <= 10; i++) {
    arrProm.push(fetch(`https://swapi.dev/api/planets/${i}`).then((response) => response.json()));
};

Promise.all(arrProm).then((planets) => {
    planets.forEach((planet) => {
        console.log(planet.name);
    });
});