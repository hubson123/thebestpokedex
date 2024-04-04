'use client'

import React,{ useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuMousePointerClick } from "react-icons/lu";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { IMAGE_PATH } from "@/types/constants";
import { Pokemon } from "@/types/pokemon";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { setPokemonList } from "@/lib/features/listSlice";

import { HomeContainer, ListItem, ListWrapper, HiddenButton } from './Home.styled';
import { Button } from "../Button.styled";
import SearchInput from "../SearchInput";
import { axiosInstance } from "@/utilities/callApi";
import { Flex } from "../Flex.styled";


interface Props{
    pokemonList: Pokemon[]
}

const Layout = ({pokemonList}: Props) =>{
    const router = useRouter()
    //zmienna odpowiedzialne za paginacje - page oraz offset
    const [offset,setOffset] = useState(0)
    const [page,setPage] = useState(1)
    // zmienna pomocnicza dla wyszukiwarki
    const [searchValue,setSearchValue] = useState('')

    const listState = useAppSelector(state => state.list.list)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        //dodanie wartości z API do store
        dispatch(setPokemonList(pokemonList))
    },[pokemonList])
    
    const handleClick = (index:number) =>{
        router.push(`/details/${index}`)
    }

    //obsługa wyszukiwania
    const handleSearch = (e :any) => { 
        const searchTerm = e.target.value;
        setSearchValue(searchTerm)
    
        const filteredItems = listState.filter((pokemon:Pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPage(1)
        dispatch(setPokemonList(filteredItems))
      }

      //obsługa paginacji - następna strona
      const loadNextPage = async() =>{
        if(page>=1){
            setPage(page+1)
            setOffset(offset+20)
            await axiosInstance
            .get(`/pokemon/?offset=${offset+20}&limit=20`)
            .then((response: any) => dispatch(setPokemonList(response.data.results)))
            .catch((error) => console.log(error.message));
        }
      }

    //obsługa paginacji - poprzednia strona
      const loadPreviousPage = async() =>{
        setPage(page-1)
        setOffset(offset-20)
        await axiosInstance
        .get(`/pokemon/?offset=${offset-20}&limit=20`)
        .then((response: any) => dispatch(setPokemonList(response.data.results)))
        .catch((error) => console.log(error.message));

      }

    const list = listState?.map((pokemon: Pokemon,key: number)=>
       ( 
        //tutaj musiałem pokombinować z obrazkiem poniewaz nie dostaje go w liście więc wycinam numer pokemona ze zmiennej url
        <ListItem 
            url={`${IMAGE_PATH}${pokemon.url.split('pokemon')[1].replaceAll("/","")}.png`} 
            onClick={()=> handleClick(Number(pokemon.url.split('pokemon')[1].replaceAll("/","")))}>
            <h3>{pokemon.name}</h3>
            <HiddenButton><Link href={`/details/${key+1}`}>Szczegóły</Link></HiddenButton>
        </ListItem>
        ))
    
    return(
        <HomeContainer>
            <h2>Witaj Trenerze Pokémon,</h2>
            <h3>przed Tobą baza wszystkich bohaterów Pokémon. Kliknij w poszczególne postaci i sprawdź, jakie możliwości i supermoce mają Twoi ulubieni wojownicy.</h3>
            <SearchInput value={searchValue} name='search' onChange={handleSearch} />
            <ListWrapper>
                {list}
            </ListWrapper>
            <Flex>
                <FaChevronCircleLeft size={30} onClick={loadPreviousPage}/>
                    <p>{page}</p>
                <FaChevronCircleRight size={30} onClick={loadNextPage}/>
            </Flex>
        </HomeContainer>
    )
}
export default Layout;