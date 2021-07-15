import styled from "styled-components";
import { COLORS } from "../../constants";

export const Body = styled.div`
    width: 80%;
`

export const ButtonIcon = styled.img`
    width: 15px;
    height: 15px;
    tint-color: ${COLORS.blue}
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    padding-left: 40px;
`

export const ButtonText = styled.p`
    font-family: 'Roboto';
    font-weight: 600;
    padding: 5px;
    margin-bottom: 0px;
`

export const DispositionContainer = styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 40px;
    align-items: center;    
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 20px 0px 40px;
`

export const HeaderInfo = styled.div`
    width: 50%;
`

export const HeaderSearcher = styled.div`
    width: 50%;
`

export const HeaderTitle = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`

export const HeaderSubtitle = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 400;
`

export const Icon = styled.img`
    display: inlinline-block;
    height: 30px;
    width: 30px;
    ${props => props.margin && 
        `margin-right: 15px;`
    }
`

export const IconContainer = styled.div`
    display: flex;
    width: 7%;
    align-items: center;
`

export const IconNumber = styled.p`
    font-family: 'Roboto';
    margin: 0px 10px 0px 0px;
    font-weight: 700;
    font-size: 20px;
    display: inline;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const PaginationContainer = styled.div`
    width: 100%;
    min-width: 800px;
    display: flex;
    justify-content: center;
`

export const Title = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: ${COLORS.black};
    background-color: ${COLORS.gray};
    margin: 0;
    padding: 20px 20px 20px 40px;
`