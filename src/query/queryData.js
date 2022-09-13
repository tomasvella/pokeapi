export const queryData = (lean) => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((data) => lean(data));
};
