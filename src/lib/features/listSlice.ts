import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/lib/store'
import { Pokemon } from '@/types/pokemon'

interface PokemonListState {
  list: Pokemon[] | []
}

const initialState: PokemonListState = {
   list: []
}
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

export const getPokemonList = (state: RootState) => state.list

export default pokemonListSlice.reducer