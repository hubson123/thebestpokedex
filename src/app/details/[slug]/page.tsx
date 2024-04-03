import { getPokemon } from "@/actions/getPokemonDetails"
import Layout from '@/components/PokemonDetaisPage/Layout';

export default async function Page({ params }: { params: { slug: string } }) {
    const pokemon = await getPokemon(params.slug)
    return <Layout pokemon={pokemon} />
  }