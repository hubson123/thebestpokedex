import { Pokemon } from "@/types/pokemon";
import { axiosInstance } from "@/utilities/callApi";

//server action odpowiedzialna za pobranie listy pokemonów
export const getPokemonList = async () => {
  const pokemonList = await axiosInstance
    .get('/pokemon/?offset=0&limit=20')
    .then((response: any) => response.data.results)
    .catch((error) => console.log(error.message));

  // castowanie zmiennej na typ Pokemon[]
  return pokemonList as Pokemon[];
};