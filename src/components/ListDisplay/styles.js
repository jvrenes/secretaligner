import styled from 'styled-components'
import { COLORS } from '../../constants'

export const Body = styled.div`
`

export const Container = styled.div`
    padding: 20px;
    min-width: 800px;
`

export const Header = styled.div`
padding-left: 40px;
    display: flex;
    justify-content: space-around;
    aling-items: center;

`
export const HeaderText = styled.p`
    display: block;
    margin-bottom: 0;
    width: 20%;
    text-align: center;
    font-family: 'Roboto';
    font-size: 12px;
    color: ${COLORS.black}
`

export const Icon = styled.img`
    width: 15px;
    height: 15px;
`

export const NameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Section = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

`

export const StatusContainer = styled.div`
    justify-content: center;
    display: flex;
    width: 100%;
    padding: 10px 0 10px 0;
    border-radius: 20px;
    color: white;
    background-color: ${props =>
        props.status === 'facturado'
            ? COLORS.green
            : props.status === 'enviado'
                ? COLORS.blue
                : props.status === 'fabricando'
                    ? COLORS.yellow
                    : props.status === 'planificando'
                        ? COLORS.orange
                        : COLORS.red
    }
`

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    opacity: 0.5;
`

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid ${COLORS.gray}
`

export const UserName = styled.p`
    width: 100%;
    margin-bottom: 0px;
    font-family: 'Roboto';
    font-size: 14px;
    color: ${COLORS.blackGray}
`

export const UserDate = styled.p`
    display: inline;
    font-family: 'Roboto';
    font-size: 12px;
    color: ${COLORS.Gray}
`

export const UserText = styled.p`
    width: 100%;
    margin-bottom: 0px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 14px;
    color: ${COLORS.blackGray}
`
