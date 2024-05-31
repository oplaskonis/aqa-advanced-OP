const Starships = async () => {
      const response = await fetch('https://swapi.dev/api/people/14/');
      const data = await response.json();
      for (const starshipUrl of data.starships) {
        const res = await fetch(starshipUrl);
        const starship = await res.json();
        console.log(starship.name);
      }
    } 
  Starships();
