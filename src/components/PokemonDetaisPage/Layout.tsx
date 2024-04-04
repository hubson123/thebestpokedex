'use client'
import { IMAGE_PATH } from "@/types/constants";
import { Pokemon, PokemonDetails } from "@/types/pokemon";
import React,{ useEffect, useState } from "react";
import Link from "next/link";
import { Button } from '../Button.styled';
import { DetailsContainer, PokemonContainer, AttributesContainer, InformationContainer, StatisticsContainer, ReturnButton } from './Details.styled';
import { GiWeight, GiBodyHeight } from "react-icons/gi";
import { Tag } from "@/components/Tag.styled";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { setPokemon } from "@/lib/features/pokemonSlice";
import { setTypeColor } from '../../utilities/setTypeColor';
import { url } from "inspector";
import { Flex } from '../Flex.styled';

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
            <AttributesContainer url='https://cdn.pixabay.com/photo/2023/06/24/03/50/monster-ball-8084507_1280.png'>
            <InformationContainer>
            <h3>Podstawowe informacje: </h3>
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
            <h2>{pokeState.name}</h2>
                <img height={300} src={pokeState.sprites.front_default} />
                <h3> Wersja shiny: </h3>
                <img height={300} src={pokeState.sprites.front_shiny} />
            </PokemonContainer>
        </DetailsContainer>
    )
}
export default Layout;