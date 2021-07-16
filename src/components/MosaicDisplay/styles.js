import styled from 'styled-components'
import { COLORS } from '../../constants'

export const Avatar = styled.img`
    vertical-align: top;
    width: 80px;
    height: 80px;
    margin-left: -6px;
    opacity: 0.5;
`

export const ButtonsContainer = styled.div`
    align-items: space-between;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    &:after {
        content: "";
        flex: auto;
      }
`

export const InfoContainer = styled.div`
`

export const Text = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
    color: ${COLORS.black};
`

export const TextSecondary = styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
    color: ${COLORS.black};
`

export const Status = styled.div`
    display: flex;
    width: 250px;
    height: 50px;
    align-items: center;
    margin-top: -22px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-left: -22px;
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

export const StatusText = styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 0;
    margin-left: 20px;
    color: ${COLORS.white};
`

export const UserCard = styled.div`
    width: 250px;
    height: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 10px 20px 10px;
    border: 2px solid ${COLORS.gray};
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const UserInfo = styled.div`
    display: inline-block;
    padding-left: 10px;
    max-width: 125px;
    max-height: 90px;
`