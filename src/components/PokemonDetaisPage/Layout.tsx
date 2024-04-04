'use client'
import React,{ useEffect, useState } from "react";
import Link from "next/link";
import { GiWeight, GiBodyHeight } from "react-icons/gi";

import { IMAGE_PATH, SPACES } from "@/types/constants";
import { Pokemon, PokemonDetails } from "@/types/pokemon";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { setPokemon } from "@/lib/features/pokemonSlice";
import { setTypeColor } from '@/utilities/setTypeColor';

import { Flex } from '../Flex.styled';
import { Tag } from "@/components/Tag.styled";
import { DetailsContainer, Title, PokemonContainer, AttributesContainer, InformationContainer, StatisticsContainer, ReturnButton } from './Details.styled';
import { Button } from '../Button.styled';

interface Props{
    pokemon: PokemonDetails
}

const Layout = ({pokemon}: Props) =>{
    const pokeState = useAppSelector(state => state.pokemon.pokemon)
    const dispatch = useAppDispatch()
    //wywołanie akcji przypisania pokemona do store
    useEffect(()=>{
        dispatch(setPokemon(pokemon))
    },[pokemon])

    return(
        <DetailsContainer>
            <AttributesContainer>
            <Title>
            <h1>{pokemon.name}</h1>
            </Title>
            <InformationContainer>
            <h2>Podstawowe informacje: </h2>
            <Flex>
                <p><GiWeight size={30} /> {(pokeState.weight*0.1).toFixed(2)} kg</p>
                <p><GiBodyHeight size={30} /> {(pokeState.height*0.1).toFixed(1)} m</p>
            </Flex>
            <h3>Zdolność: </h3>
            <Flex>
            {pokeState.abilities.map((ability:any,index:number)=>
                <Tag color='lightBlue'> {ability.ability.name}</Tag>)}
            </Flex>
            <h3>Typ: </h3>
            <Flex>
            {pokeState.types.map((type:any,index:number)=>
                <Tag color={setTypeColor(type.type.name)}>{type.type.name}</Tag>)}
            </Flex>
            </InformationContainer>
            <StatisticsContainer>
            <h2>Statystyki: </h2>
                {pokeState.stats.map((stat:any,index:number)=>
                        <small>{stat.stat.name} {stat.base_stat}</small>
                    )}
            </StatisticsContainer>

            <ReturnButton><Link href={'/'}>Powrót do strony głównej</Link></ReturnButton>
            </AttributesContainer>
            <PokemonContainer>
                <h2> Wersja standard: </h2>
                <img height={300} src={pokeState.sprites.front_default} />
                <h2> Wersja shiny: </h2>
                <img height={300} src={pokeState.sprites.front_shiny} />
            </PokemonContainer>
        </DetailsContainer>
    )
}
export default Layout;