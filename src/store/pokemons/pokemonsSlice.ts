import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: {[key: string]: SimplePokemon},
}

const initialState: PokemonsState = {
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<{[key: string]: SimplePokemon}>){
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload;
      const { id } = pokemon;

      if( !!state.favorites[id] ) {
        delete state.favorites[id];
        return
      }

      state.favorites[id] = pokemon;
    }
  }
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer