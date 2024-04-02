'use client';

import { Provider } from "react-redux";
import { AppStore, makeStore } from ".";
import { useEffect, useRef } from "react";
import { setFavorites } from "./pokemons/pokemonsSlice";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({children}: Props) => {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favoritePokemons = localStorage.getItem('favorite-pokemons') ?? '{}';
      storeRef.current?.dispatch(setFavorites(JSON.parse(favoritePokemons)));
    }
  }, []);
  return (
    <Provider store={storeRef.current}>
        {children}
    </Provider>
  )
}
