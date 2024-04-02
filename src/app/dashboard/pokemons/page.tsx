import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
  title: '151 Pokemons',
  description: 'Magna anim fugiat deserunt velit.',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  // throw new Error('Algo salió mal pipipipi')

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl my-5">Pokemon's List
        <small className="text-blue-500"> Static </small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}