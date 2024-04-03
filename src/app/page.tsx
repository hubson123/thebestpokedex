import { getPokemonList } from "@/actions/getPokemonList";
import Layout from "@/components/HomePage/Layout";

export default async function Home() {
  const pokemonList = await getPokemonList()
  return (
    <Layout pokemonList={pokemonList} />
  );
}
