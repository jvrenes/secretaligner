import Button from 'react-bootstrap/Button'

import {
    Avatar,
    ButtonsContainer,
    Container,
    InfoContainer,
    Text,
    Status,
    StatusText,
    UserInfo,
    UserCard,
    TextSecondary,
} from './styles'

import avatarIcon from '../../assets/icons/userAvatar.png'

const ListDisplay = ({ patients, setCurrentPatient, setShowPatient }) => {
    return (
        <Container>
            {
                patients.map((patient, index) =>
                    <UserCard
                        key={index}
                        onClick={() => {
                            setShowPatient(true)
                            setCurrentPatient(patient)
                        }}
                    >
                        <Status status={patient.ficha_dental.estado}>
                            <StatusText>{patient.ficha_dental.estado.toUpperCase()}</StatusText>
                        </Status>
                        <InfoContainer>
                            <Avatar src={avatarIcon} />
                            <UserInfo>
                                <Text>{patient.datos_paciente.nombre} {patient.datos_paciente.apellidos}</Text>
                            </UserInfo>
                            <Text>{patient.datos_paciente.fecha_nacimiento}</Text>
                            <TextSecondary>Clínica: {patient.ficha_dental.clinica}</TextSecondary>
                            <TextSecondary>Tratamiento: {patient.ficha_dental.objetivo_tratamiento}</TextSecondary>
                        </InfoContainer>

                        <ButtonsContainer>
                            <Button variant="primary" size="sm">Editar</Button>{' '}
                            <Button variant="success" size="sm">Finalizar</Button>{' '}
                            <Button variant="danger" size="sm">Borrar</Button>
                        </ButtonsContainer>
                    </UserCard>
                )
            }
        </Container>
    )
}

export default ListDisplay