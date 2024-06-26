import { PokemonDetails } from "@/types/pokemon";
import { axiosInstance } from "@/utilities/callApi";

//server action odpowiedzialny za pobranie detali pokemona
export const getPokemon = async (id:string) => {
  const pokemonDetails = await axiosInstance
    .get(`/pokemon/${id}`)
    .then((response: any) => response.data)
    .catch((error) => console.log(error.message));
  return pokemonDetails as PokemonDetails;
};