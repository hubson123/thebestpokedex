'use client'
import { IMAGE_PATH } from "@/types/constants";
import { Pokemon, PokemonDetails } from "@/types/pokemon";
import React,{ useState } from "react";
import Link from "next/link";
import { Button } from '../Button.styled';
import { DetailsContainer } from './Details.styled';
import { GiWeight, GiBodyHeight } from "react-icons/gi";

interface Props{
    pokemon: any
}

const Layout = ({pokemon}: Props) =>{
    
    return(
        <DetailsContainer>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} />
            <img src={pokemon.sprites.front_shiny} />
            <p><GiWeight size={30} /> Waga: {pokemon.weight*0.1} kg</p>
            <p><GiBodyHeight size={30} />Wzrost: {pokemon.height*0.1} m</p>
            {pokemon.types.map((type:any,index:number)=>
                <p>Typ: {type.type.name}</p>)}
                {pokemon.stats.map((stat:any,index:number)=>
                        <p>{stat.stat.name} {stat.base_stat}</p>
                    )}
                    {pokemon.abilities.map((ability:any,index:number)=>
                        <><p>Nazwa zdolności: {ability.ability.name}</p>
                            <p>Ukryta: {ability.is_hidden ? 'Tak':'Nie'}</p>
                        </>)}
            <Button><Link href={'/'}>Powrót</Link></Button>
        </DetailsContainer>
    )
}
export default Layout;