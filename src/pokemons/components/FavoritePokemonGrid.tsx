'use client'

import { RootState, useAppSelector } from "@/store"
import { PokemonGrid, SimplePokemon } from ".."
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { createSelector } from "@reduxjs/toolkit";

export const FavoritePokemonGrid = () => {

    const pokemonsSelector = (state: RootState) => state.pokemons.favorites;
    const favoritePokemonsSelector = createSelector(
        pokemonsSelector,
        pokemons => Object.values(pokemons)
    );

    const favoritePokemons = useAppSelector(favoritePokemonsSelector);
    const [pokemons, setPokemons] = useState(favoritePokemons);
    useEffect(() => {
        if(pokemons.length === 0){
            setPokemons(favoritePokemons)
        }
    }, [favoritePokemons])
    

    return (
        <>
            {
                pokemons.length
                ? 
                <div className="flex flex-wrap gap-10 items-center justify-center">
                    <PokemonGrid pokemons={pokemons}/>
                </div>
                : <NoFavorites/>
            }
        </>
    )
}

export const NoFavorites = () => {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-500"/>
        <span>No hay favoritos</span>
      </div>
    )
  }
