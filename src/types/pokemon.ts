// dwa typy uzywane w aplikacji - Pokemon - typ pokemona w liście, Pokemon Details - szczegółowy typ
export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string
    weight: number
    height: number
    types: {
      type:{
        name: string
      }
    }[],
    abilities: {
      ability:{
        name: string
      },
      is_hidden: boolean
    }[],
    stats: {
      stat:{
        name: string
      },
      base_stat: number
    }[],
    sprites:{
      front_default: string
      front_shiny: string
    }
}
//numer Pokémona, nazwę, typ(y), umiejętności oraz inne istotne informacje.