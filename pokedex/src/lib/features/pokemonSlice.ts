import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/lib/store'
import { PokemonDetails } from '@/types/pokemon'

interface PokemonState {
  pokemon: PokemonDetails
}

const initialState: PokemonState = {
   pokemon: {
    name:''
   }
}
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state: PokemonState,action: PayloadAction<PokemonDetails>) => {
      state.pokemon=action.payload
    },
    clearPokemon: (state: PokemonState) => {
        state.pokemon=initialState.pokemon
    }
  }
})

export const { setPokemon, clearPokemon } = pokemonSlice.actions

export const getPokemon = (state: RootState) => state.pokemon

export default pokemonSlice.reducer