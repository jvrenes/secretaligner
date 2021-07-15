import {
    Container,
    Icon,
    IconContainer,
    Input
} from './styles'

import lensIcon from '../../assets/icons/lens.png'

const Searcher = ({onChange}) => {
    return (
        <Container>
            <IconContainer>
                <Icon  src={lensIcon}/>
                <Input type="text" placeholder="Buscar..." onChange={onChange}/>
            </IconContainer>
        </Container>
    )
}

export default Searcher