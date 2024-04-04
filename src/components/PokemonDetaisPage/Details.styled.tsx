import { styled } from "styled-components";
import { Flex } from "../Flex.styled";
import { COLORS, SPACES } from "@/types/constants";

export const DetailsContainer = styled.div`
    display: flex;
    text-transform: capitalize;

`
export const AttributesContainer = styled(Flex)<{url:string}>`
    width: 70%;
    height: 100vh;
    flex-direction: column;
    background-color: ${COLORS.lightGray};
    background-size: cover;
    background-image: url(${props => props.url});
`

export const PokemonContainer = styled(Flex)`
    width: 50%;
    flex-direction: column;
`
export const StatisticsContainer = styled(Flex)`
    border-radius: ${SPACES.m}px;
    background-color: ${COLORS.yellow}; 
    max-width: 300px;
    flex-wrap: wrap;
    text-align: center;
    padding: ${SPACES.m}px;
    gap: ${SPACES.m}px;  
    h2{
        width: 300px;
        margin:0;
    }
    small{
        font-size: 14px;
        width: 130px;
    }
`
export const InformationContainer = styled(StatisticsContainer)`
    background-color: ${COLORS.blue}; 
    max-width: 500px;
    min-width:300px;
    flex-wrap: wrap;
    gap: ${SPACES.m}px;  
    flex-direction: column;
    margin-bottom: ${SPACES.l}px;
    h3{
        margin:0
    }

`