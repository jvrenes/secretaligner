import styled from 'styled-components'

import { COLORS } from '../../constants'

export const NavContainer = styled.div`
    background-color: ${COLORS.black};
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Avatar = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 15px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${COLORS.white};
    border-radius: 20px;
`

export const AvatarImage = styled.img`
    width: 20px;
    height: 20px;
    color: ${COLORS.white};
`

export const AvatarName = styled.p`
    color: ${COLORS.white};
    margin-right: 15px;
    margin-bottom: 0;
    text-alingment: center;
`

export const Icon = styled.img`
    width: 25px;
    height; 25px;
    margin-right: 15px;
`
