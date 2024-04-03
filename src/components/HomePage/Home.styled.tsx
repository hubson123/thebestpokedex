'use client'
import styled from "styled-components";
import { Flex } from "../Flex.styled";
import { SPACES } from "@/types/constants";

export const HomeContainer = styled(Flex)`
    flex-direction: column;
`

export const ListItem = styled(Flex)`
    padding: ${SPACES.xs}px;
`