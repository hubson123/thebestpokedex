import { COLORS, SPACES } from "@/types/constants";
import { styled } from "styled-components";

export const Button = styled.button`
    background-color: ${COLORS.gray};
    border-radius: ${SPACES.xs}px;
    border: none;
    width: auto;
    padding: ${SPACES.s}px;
    cursor: pointer;
    a{
        text-decoration: none;
        color: black;
    }
`