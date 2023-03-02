const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const pokemon = await res.json();

const img = document.createElement("img");
img.src = pokemon.sprites.front_default;
document.getElementById("result")!.append(img);

export { };