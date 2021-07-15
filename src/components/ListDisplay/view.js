import Dropdown from 'react-bootstrap/Dropdown'

import {
    Body,
    Container,
    Header,
    HeaderText,
    Icon,
    NameContainer,
    Section,
    StatusContainer,
    UserAvatar,
    UserCard,
    UserDate,
    UserName,
    UserText,
} from './styles'

import avatarIcon from '../../assets/icons/userAvatar.png'
import calendarIcon from '../../assets/icons/calendar.png'

const ListDisplay = ({ patients }) => {
    return (
        <Container>
            <Header>
                <HeaderText>Nombre y Apellidos</HeaderText>
                <HeaderText>Clínica</HeaderText>
                <HeaderText>Objetivo tratamiento</HeaderText>
                <HeaderText>Estado</HeaderText>
                <HeaderText>Acciones</HeaderText>
            </Header>
            <Body>
                {
                    patients.map((patient, index) => {
                        return (
                            <UserCard key={index}>
                                <UserAvatar src={avatarIcon} />
                                <NameContainer>
                                    <UserName>{patient.datos_paciente.nombre} {patient.datos_paciente.apellidos}</UserName>
                                    <div>
                                        <Icon src={calendarIcon} />
                                        <UserDate>{patient.datos_paciente.fecha_nacimiento}</UserDate>
                                    </div>

                                </NameContainer>

                                <UserText>{patient.ficha_dental.clinica}</UserText>
                                <UserText>{patient.ficha_dental.objetivo_tratamiento}</UserText>
                                <StatusContainer status={patient.ficha_dental.estado}>
                                    <UserText>{patient.ficha_dental.estado}</UserText>
                                </StatusContainer>
                                <Section>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                            Acciones
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Editar</Dropdown.Item>
                                            <Dropdown.Item href="#">Finalizar</Dropdown.Item>
                                            <Dropdown.Item href="#">Borrar</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Section>

                                {/* <UserText>Accion</UserText> */}
                            </UserCard>
                        )

                    })
                }

            </Body>
        </Container>
    )
}

export default ListDisplay;