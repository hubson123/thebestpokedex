import { SPACES } from "@/types/constants";
import { styled } from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${SPACES.s}px;
`