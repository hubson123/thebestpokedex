import { SPACES } from "@/types/constants";
import { styled } from "styled-components";

export const Tag = styled.div<{color:string}>`
    background-color: ${props => props.color};
    padding: ${SPACES.xs}px;
    border-radius: ${SPACES.m}px;
    max-width: 100px;
    min-width: 70px;
    text-align: center;
    text-transform: capitalize;
`