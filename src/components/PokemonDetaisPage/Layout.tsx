'use client'
import { IMAGE_PATH } from "@/types/constants";
import { Pokemon, PokemonDetails } from "@/types/pokemon";
import React,{ useEffect, useState } from "react";
import Link from "next/link";
import { Button } from '../Button.styled';
import { DetailsContainer, PokemonContainer, AttributesContainer, StatisticsContainer } from './Details.styled';
import { GiWeight, GiBodyHeight } from "react-icons/gi";
import { Tag } from "@/components/Tag.styled";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { setPokemon } from "@/lib/features/pokemonSlice";

interface Props{
    pokemon: any
}

const Layout = ({pokemon}: Props) =>{
    const pokeState = useAppSelector(state => state.pokemon.pokemon)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(setPokemon(pokemon))
        console.log('Pokemon; ',pokeState)
    },[pokemon])
    return(
        <DetailsContainer>
            <AttributesContainer style={{backgroundImage: `url('../../images/pokeball.png')`}}>
            <p>{pokeState.name}</p>
            <p><GiWeight size={30} /> Waga: {pokeState.weight*0.1} kg</p>
            <p><GiBodyHeight size={30} />Wzrost: {pokeState.height*0.1} m</p>
            {pokeState.types.map((type:any,index:number)=>
                <Tag color='blue'>{type.type.name}</Tag>)}
            <StatisticsContainer>
                {pokeState.stats.map((stat:any,index:number)=>
                        <p>{stat.stat.name} {stat.base_stat}</p>
                    )}
            </StatisticsContainer>
                    {pokeState.abilities.map((ability:any,index:number)=>
                        <><p>Nazwa zdolności: {ability.ability.name}</p>
                            <p>Ukryta: {ability.is_hidden ? 'Tak':'Nie'}</p>
                        </>)}
            <Button><Link href={'/'}>Powrót</Link></Button>
            </AttributesContainer>
            <PokemonContainer>
                <img height={200} src={pokeState.sprites.front_default} />
                <img height={200} src={pokeState.sprites.front_shiny} />
            </PokemonContainer>
        </DetailsContainer>
    )
}
export default Layout;