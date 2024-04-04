import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '@/types/pokemon'

interface PokemonListState {
  list: Pokemon[]
}

const initialState: PokemonListState = {
   list: []
}

//dwie akcje odpowiedzialne ze zarządzaniem stanem aplikacji
export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    setPokemonList: (state: PokemonListState,action: PayloadAction<Pokemon[]>) => {
      state.list=action.payload
    },
    clearPokemonList: (state: PokemonListState) => {
        state.list=initialState.list
    }
  }
})

export const { setPokemonList, clearPokemonList } = pokemonListSlice.actions

export default pokemonListSlice.reducer