import { styled } from "styled-components";
import { Flex } from "../Flex.styled";
import { COLORS, SPACES } from "@/types/constants";
import { Button } from "../Button.styled";

export const Title = styled(Flex)`
    margin-right: ${2*SPACES.xl}px;
    width: 420px;
    font-size: 37px;
    @media (max-width: 900px) {
        margin-right:0;
        margin: 0 ${SPACES.m}px;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    text-transform: capitalize;
    @media (max-width: 900px) {
    flex-direction: column;
    }
`
export const AttributesContainer = styled(Flex)<{url:string}>`
    width: 60%;
    @media (max-width: 900px) {
        width: 100%;
        align-items: center;
    }
    height: 100vh;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${COLORS.lightGray};
    background-image: url(http://vignette2.wikia.nocookie.net/pocketmonsters/images/9/9b/Ash_anime_art.png/revision/latest?cb=20130928222640);
    background-size: contain;
    background-repeat: no-repeat;
    align-items: end;
`

export const PokemonContainer = styled(Flex)`
    width: 40%;
    h2{
        margin:0;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
    flex-direction: column;

`
export const StatisticsContainer = styled(Flex)`
    border-radius: ${SPACES.m}px;
    background-color: ${COLORS.yellow}; 
    max-width: 400px;
    flex-wrap: wrap;
    text-align: center;
    padding: ${SPACES.m}px;
    gap: ${SPACES.m}px;  
    h2{
        width: 300px;
        margin:0;
    }
    small{
        font-size: 16px;
        width: 140px;
    }
    margin-right: ${2*SPACES.xl}px;
    @media (max-width: 900px) {
        margin: 0 ${SPACES.m}px;
    }
`
export const InformationContainer = styled(StatisticsContainer)`
    background-color: ${COLORS.blue}; 
    max-width: 500px;
    min-width: 400px;
    flex-wrap: wrap;
    gap: ${SPACES.m}px; 
    flex-direction: column;
    margin-bottom: ${SPACES.l}px;
    h3{
        margin:0
    }
    @media (max-width: 900px) {
        margin: 0 ${SPACES.m}px;
    }

`
export const ReturnButton = styled(Button)`
    position: absolute;
    bottom: ${SPACES.m}px;;
    right: ${SPACES.m}px;;
`