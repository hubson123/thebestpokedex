import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/lib/store'
import { PokemonDetails } from '@/types/pokemon'

interface PokemonState {
    pokemon: PokemonDetails
}

const initialState: PokemonState = {
    pokemon:{name: '',
    weight: 0,
    height: 0,
    types: [],
    abilities: [],
    stats: [],
    sprites:{
      front_default: '',
      front_shiny: ''
    }
  }
}
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state: PokemonState,action: PayloadAction<PokemonDetails>) => {
      state.pokemon=action.payload
      console.log('State: ',state.pokemon)
    },
    clearPokemon: (state: PokemonState) => {
        state=initialState
    }
  }
})

export const { setPokemon, clearPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer