'use client'
import { IMAGE_PATH } from "@/types/constants";
import { Pokemon } from "@/types/pokemon";
import React,{ useEffect, useState } from "react";
import { HomeContainer, ListItem, ListWrapper, HiddenButton } from './Home.styled';
import { Button } from "../Button.styled";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuMousePointerClick } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { setPokemonList } from "@/lib/features/listSlice";


interface Props{
    pokemonList: any[]
}

const Layout = ({pokemonList}: Props) =>{
    const router = useRouter()
    const [offset,setOffset] = useState(0)

    const listState = useAppSelector(state => state.list.list)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(setPokemonList(pokemonList))
    },[pokemonList])
    
    const handleClick = (index:number) =>{
        router.push(`/details/${index}`)
    }
    const list = listState?.map((pokemon: Pokemon,key: number)=>
       ( 
        <ListItem url={`${IMAGE_PATH}${offset+key+1}.png`} onClick={()=> handleClick(offset+key+1)}>
            <h3>{pokemon.name}</h3>
            <HiddenButton><Link href={`/details/${key+1}`}>Szczegóły</Link></HiddenButton>
        </ListItem>
        ))
    
    return(
        <HomeContainer>
            <h2>Witaj Trenerze Pokémon,</h2>
            <h3>przed Tobą baza wszystkich bohaterów Pokémon. Kliknij w poszczególne postaci i sprawdź, jakie możliwości i supermoce mają Twoi ulubieni wojownicy.</h3>
            <ListWrapper>
                {list}
            </ListWrapper>
        </HomeContainer>
    )
}
export default Layout;