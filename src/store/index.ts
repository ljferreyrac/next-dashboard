import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { localStorageMIddleware } from './middlewares/localStorage.middleware';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: pokemonsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat( localStorageMIddleware )
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()