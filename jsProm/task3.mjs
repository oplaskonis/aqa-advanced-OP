const Residents = async () => {
    
    const filmResponse = await fetch('https://swapi.dev/api/films/3/');
    const filmData = await filmResponse.json();
   
    const planetPromises = filmData.planets.map(async planetUrl => {
      const planetResponse = await fetch(planetUrl);
      const planetData = await planetResponse.json();
    
      const residentPromises = planetData.residents.map(async residentUrl => {
        const residentResponse = await fetch(residentUrl);
        const residentData = await residentResponse.json();
        return residentData.name;
      });
      
      const residents = await Promise.all(residentPromises);
      return {
        planetName: planetData.name,
        residents: residents
      };
    });
    
    const planetsWithResidents = await Promise.all(planetPromises);
    console.log(planetsWithResidents);
};

Residents();