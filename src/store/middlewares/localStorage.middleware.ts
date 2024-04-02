import { Action, Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMIddleware: Middleware = (state) => { 
    return (next) => (action) => {
        next(action);
        const { type } = action as Action;
        if( type === 'pokemons/toggleFavorite' ){
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify( pokemons.favorites ));
            return; 
        }
        
    }
}