'use client'
import { IMAGE_PATH } from "@/types/constants";
import { Pokemon } from "@/types/pokemon";
import React,{ useState } from "react";
import { HomeContainer, ListItem, ListWrapper, HiddenButton } from './Home.styled';
import { Button } from "../Button.styled";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuMousePointerClick } from "react-icons/lu";


interface Props{
    pokemonList: any[]
}

const Layout = ({pokemonList}: Props) =>{
    const router = useRouter()
    const [offset,setOffset] = useState(0)

    const handleClick = (index:number) =>{
        router.push(`/details/${index}`)
    }
    const list = pokemonList?.map((pokemon: Pokemon,key: number)=>
       ( 
        <ListItem url={`${IMAGE_PATH}${offset+key+1}.png`} onClick={()=> handleClick(offset+key+1)}>
            <h3>{pokemon.name}</h3>
            <HiddenButton><Link href={`/details/${key+1}`}>Szczegóły</Link></HiddenButton>
        </ListItem>
        ))
    
    return(
        <HomeContainer>
        <h2>Welcome in Pokedex</h2>
        <ListWrapper>
        {list}
        </ListWrapper>
        </HomeContainer>
    )
}
export default Layout;