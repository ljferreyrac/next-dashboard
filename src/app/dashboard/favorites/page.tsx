import { FavoritePokemonGrid, PokemonGrid } from "@/pokemons";

export const metadata = {
 title: 'Favorites',
 description: 'Magna anim fugiat deserunt velit.',
};

export default async function FavoritePage() {
  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl my-5">Favorite Pokemons
        <small className="text-blue-500"> Global State </small>
      </span>
      <FavoritePokemonGrid/>
    </div>
  );
}