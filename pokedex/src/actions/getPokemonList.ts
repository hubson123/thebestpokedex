import { Pokemon } from "@/types/pokemon";
import { axiosInstance } from "@/utilities/callApi";

export const getPokemonList = async () => {
  const pokemonList = await axiosInstance
    .get('/pokemon/?offset=0&limit=20')
    .then((response: any) => response.data.results)
    .catch((error) => console.log(error.message));

  return pokemonList as Pokemon[];
};