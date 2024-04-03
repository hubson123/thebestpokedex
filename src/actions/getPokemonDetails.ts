import { PokemonDetails } from "@/types/pokemon";
import { axiosInstance } from "@/utilities/callApi";

export const getPokemon = async (id:string) => {
    console.log('SLUG: ',id)
  const pokemonDetails = await axiosInstance
    .get(`/pokemon/${id}`)
    .then((response: any) => response.data)
    .catch((error) => console.log(error.message));
    console.log('Details: ',pokemonDetails)
  return pokemonDetails as PokemonDetails;
};