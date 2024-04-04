import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './features/pokemonSlice'
import pokemonListSlice from './features/listSlice'

//główny store aplikcaji posiadający 2 slice - lista, i pokemon
export const store = configureStore({
  reducer: {
    list: pokemonListSlice,
    pokemon: pokemonSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch