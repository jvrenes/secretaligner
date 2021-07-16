import {
    Button,
    Modal
} from 'react-bootstrap'

import {
    Avatar,
    AvatarContainer,
    Container,
    ImageContainer,
    PatientContainer,
    PatientInfo,
    Photo,
    Section,
    SectionHorizontal,
    Subsection,
    Teeths,
    Text,
    TreatmentContainer,
    TreatmentImageContainer,
    TreatmentInfo,
    Teeth11,
    Teeth12,
    Teeth13,
    Teeth14,
    Teeth15,
    Teeth16,
    Teeth17,
    Teeth18,
    Teeth21,
    Teeth22,
    Teeth23,
    Teeth24,
    Teeth25,
    Teeth26,
    Teeth27,
    Teeth28,
    Teeth41,
    Teeth42,
    Teeth43,
    Teeth44,
    Teeth45,
    Teeth46,
    Teeth47,
    Teeth48,
    Teeth31,
    Teeth32,
    Teeth33,
    Teeth34,
    Teeth35,
    Teeth36,
    Teeth37,
    Teeth38
} from './styles'

import patientImage from '../../assets/icons/patient-image.png'
import jawImage from '../../assets/icons/maxilar.jpeg'

const PatientDetails = ({ patient }) => {

    const { dientes_no_mover } = patient.ficha_dental
    const dientes = dientes_no_mover
    console.log(dientes)
    return (
        <Modal.Body>
            <Container>
                <PatientContainer>
                    <AvatarContainer>
                        <Avatar src={patientImage} />
                    </AvatarContainer>

                    <PatientInfo>
                        <Section><Text>{patient.ficha_dental.clinica}</Text></Section>
                        <Section><Text>{patient.datos_paciente.nombre}</Text></Section>
                        <Section><Text>{patient.datos_paciente.apellidos}</Text></Section>
                        <Section>
                            <Subsection><Text>{patient.datos_paciente.sexo}</Text></Subsection>
                            <Subsection><Text>{patient.datos_paciente.fecha_nacimiento}</Text></Subsection>
                        </Section>
                    </PatientInfo>
                </PatientContainer>

                <TreatmentContainer>
                    <TreatmentImageContainer>
                        <Section style={{ borderTop: '1px solid black' }}><Text>Dientes No Mover</Text></Section>
                        <ImageContainer>
                            <Teeths>
                                {dientes.includes(11) && <Teeth11><Text>11</Text></Teeth11>}
                                {dientes.includes(12) && <Teeth12><Text>12</Text></Teeth12>}
                                {dientes.includes(13) && <Teeth13><Text>13</Text></Teeth13>}
                                {dientes.includes(14) && <Teeth14><Text>14</Text></Teeth14>}
                                {dientes.includes(15) && <Teeth15><Text>15</Text></Teeth15>}
                                {dientes.includes(16) && <Teeth16><Text>16</Text></Teeth16>}
                                {dientes.includes(17) && <Teeth17><Text>17</Text></Teeth17>}
                                {dientes.includes(18) && <Teeth18><Text>18</Text></Teeth18>}
                                {dientes.includes(21) && <Teeth21><Text>21</Text></Teeth21>}
                                {dientes.includes(22) && <Teeth22><Text>22</Text></Teeth22>}
                                {dientes.includes(23) && <Teeth23><Text>23</Text></Teeth23>}
                                {dientes.includes(24) && <Teeth24><Text>24</Text></Teeth24>}
                                {dientes.includes(25) && <Teeth25><Text>25</Text></Teeth25>}
                                {dientes.includes(26) && <Teeth26><Text>26</Text></Teeth26>}
                                {dientes.includes(27) && <Teeth27><Text>27</Text></Teeth27>}
                                {dientes.includes(28) && <Teeth28><Text>28</Text></Teeth28>}
                                {dientes.includes(31) && <Teeth31><Text>11</Text></Teeth31>}
                                {dientes.includes(32) && <Teeth32><Text>12</Text></Teeth32>}
                                {dientes.includes(33) && <Teeth33><Text>13</Text></Teeth33>}
                                {dientes.includes(34) && <Teeth34><Text>14</Text></Teeth34>}
                                {dientes.includes(35) && <Teeth35><Text>15</Text></Teeth35>}
                                {dientes.includes(36) && <Teeth36><Text>16</Text></Teeth36>}
                                {dientes.includes(37) && <Teeth37><Text>17</Text></Teeth37>}
                                {dientes.includes(38) && <Teeth38><Text>18</Text></Teeth38>}
                                {dientes.includes(41) && <Teeth41><Text>41</Text></Teeth41>}
                                {dientes.includes(42) && <Teeth42><Text>42</Text></Teeth42>}
                                {dientes.includes(43) && <Teeth43><Text>43</Text></Teeth43>}
                                {dientes.includes(44) && <Teeth44><Text>44</Text></Teeth44>}
                                {dientes.includes(45) && <Teeth45><Text>45</Text></Teeth45>}
                                {dientes.includes(46) && <Teeth46><Text>46</Text></Teeth46>}
                                {dientes.includes(47) && <Teeth47><Text>47</Text></Teeth47>}
                                {dientes.includes(48) && <Teeth48><Text>48</Text></Teeth48>}
                            </Teeths>
                            <Photo src={jawImage} />
                        </ImageContainer>
                    </TreatmentImageContainer>
                    <TreatmentInfo>
                        <Section><Text style={{ color: 'white' }}> -</Text></Section>
                        <Section><Text>{patient.ficha_dental.estado.toUpperCase()}</Text></Section>
                        <Section><Text>{patient.ficha_dental.objetivo_tratamiento}</Text></Section>
                        <SectionHorizontal>
                            <Text>RECORTE DE ALINEADORES</Text>
                            <Text>{patient.ficha_dental.otros_datos.recorte_alineadores}</Text>
                            <Text>¿Desea alineadores pasivos?</Text>
                            <Text>{patient.ficha_dental.otros_datos.alineadores_pasivos ? 'Si' : 'No'}</Text>
                            <Text>¿Desea SecretRetainer al finalizar?</Text>
                            <Text>{patient.ficha_dental.otros_datos.secretretainer ? 'Si' : 'No'}</Text>
                        </SectionHorizontal>
                    </TreatmentInfo>
                </TreatmentContainer>
            </Container>
            <Button>Descargar PDF</Button>
        </Modal.Body>
    )
}

export default PatientDetails