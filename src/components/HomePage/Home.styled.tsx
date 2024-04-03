'use client'
import styled from "styled-components";
import { Flex } from "../Flex.styled";
import { COLORS, SPACES } from "@/types/constants";
import { Button } from "../Button.styled";

export const HomeContainer = styled(Flex)`
    background-color: ${COLORS.lightGray};
    flex-direction: column;
`
export const HiddenButton = styled(Button)`
    display: none;
`
export const ListItem = styled.div<{url:string}>`
    padding: ${SPACES.xs}px;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: wheat;
    background-image: url(${props => props.url});
    background-position-y: ${SPACES.m}px;
    width: 200px;
    height: 200px;
    cursor: pointer;
    h3{
        color: darkBlue;
        padding: 0;
        margin-top: -${SPACES.xxs}px;
        background-color: orange;
        text-transform: capitalize;
    }
    &:hover{
        opacity: .7;
        background-color: rgb(180, 180, 184);
            ${HiddenButton}{
            display: block;
            opacity: 1;
            margin: 60px auto 0 auto;
        }}
`
export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: ${SPACES.m}px;
`

