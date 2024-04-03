'use client'
import { IMAGE_PATH } from "@/types/constants";
import { Pokemon } from "@/types/pokemon";
import React,{ useState } from "react";
import { HomeContainer, ListItem } from './Home.styled';

interface Props{
    pokemonList: any[]
}

const Layout = ({pokemonList}: Props) =>{
    const [offset,setOffset] = useState(0)
    const list = pokemonList?.map((pokemon: any,key: number)=>
       ( 
        <ListItem>
            <p>{pokemon.name}</p>
            <img width={35} height={35} src={`${IMAGE_PATH}${offset+key+1}.png`} alt={`${pokemon.name}`} />
        
            </ListItem>
        ))
    
    return(
        <HomeContainer>
        {list}
        </HomeContainer>
    )
}
export default Layout;