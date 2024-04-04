import { styled } from "styled-components";
import { Flex } from "../Flex.styled";

export const DetailsContainer = styled.div`
    display: flex;
    text-transform: capitalize;

`
export const AttributesContainer = styled.div`
    width: 50%;
    height: 300px;
    background-image: url(../../images/pokeball.png);
`

export const PokemonContainer = styled(Flex)`
    width: 50%;
`
export const StatisticsContainer = styled(Flex)`
    width: 50%;
`