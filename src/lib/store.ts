import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './features/pokemonSlice'
import pokemonListSlice from './features/listSlice'

export const store = configureStore({
  reducer: {
    list: pokemonListSlice,
    pokemon: pokemonSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch