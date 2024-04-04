import { getPokemon } from "@/actions/getPokemonDetails"
import Layout from '@/components/PokemonDetaisPage/Layout';

//tutaj stworzony został dynamic route w celu stworzenia uniwersalnej strony szczegółów dla kazdego pokemona
export default async function Page({ params }: { params: { slug: string } }) {
    const pokemon = await getPokemon(params.slug)
    
    return <Layout pokemon={pokemon} />
  }