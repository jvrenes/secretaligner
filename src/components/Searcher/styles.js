import styled from "styled-components";
import { COLORS } from "../../constants";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: ${COLORS.gray};
    border-radius: 10px;
`

export const Icon = styled.img`
    margin-left: 20px;
    margin-right: 20px;
    width: 20px;
    height: 20px;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    background-color: ${COLORS.gray} !important;
    border-width: 0px !important;
    border-color; ${COLORS.gray} !important;
    &:focus {
        outline: none !important;
    }
`