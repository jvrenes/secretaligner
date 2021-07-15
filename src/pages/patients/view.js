// Libraries
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { CSVLink } from "react-csv";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// Components
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import Searcher from '../../components/Searcher'
import MosaicDisplay from '../../components/MosaicDisplay';
import ListDisplay from '../../components/ListDisplay';

// Styles
import {
    Body,
    ButtonIcon,
    ButtonsContainer,
    ButtonText,
    DispositionContainer,
    Header,
    HeaderInfo,
    HeaderSearcher,
    HeaderTitle,
    HeaderSubtitle,
    Icon,
    IconContainer,
    IconNumber,
    MainContainer,
    PaginationContainer,
    Title
} from './styles'

import cardIcon from '../../assets/icons/card.png'
import documentIcon from '../../assets/icons/document.png'
import listIcon from '../../assets/icons/list.png'
import mosaicIcon from '../../assets/icons/mosaic.png'

import data from '../../constants/patients'

const Patients = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [disposition, setDisposition] = useState('list')
    const [pageSize, setPageSize] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [createPatient, setCreatePatient] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [birthday, setBirthday] = useState(new Date())
    const [gender, setGender] = useState('')
    const [clinic, setClinic] = useState('')
    const [cut, setCut] = useState('')
    const [secretRetainer, setSecretRetainer] = useState('')

    let patientsIds = []

    const ids = Object.keys(data)
    ids.map(id => {
        patientsIds.push(id)
    })

    let patients = patientsIds.map(id => {
        return data[id]
    })

    if (searchTerm) {
        patients = patients.filter(patient => {
            const searchStr = searchTerm.toLowerCase()
            const nameMatches = patient.datos_paciente.nombre.toLowerCase().includes(searchStr);
            const surnameMatches = patient.datos_paciente.apellidos.toLowerCase().includes(searchStr)
            return nameMatches || surnameMatches;
        })
    }

    const paginate = () => {
        if (currentPage < 1) {
            let start = 0
            let end = pageSize
            return patients.slice(start, end)
        } else {
            let start = currentPage * pageSize
            let end = start + pageSize
            return patients.slice(start, end)
        }
    }

    const paginatedPatients = paginate()

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleAddPatient = () => {
        setCreatePatient(true)
    }

    const handleDownloadCSV = () => {
        console.log("DOWNLOAD CSV")
    }

    const handleClearForm = () => {
        console.log("Cleaning Form")
        setName('')
        setSurname('')
        setBirthday(new Date(Date.now()))
        setGender('')
        setClinic('')
        setCut('')
        setSecretRetainer('')
    }

    const handleCreatePatient = () => {

    }

    console.log(patientsIds.length / pageSize)

    let items = [];
    for (let number = 0; number <= patientsIds.length / pageSize; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)} activeLabel="">
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <NavBar doctor={'Dr. Pablo Kehyaian'} />
            <MainContainer>
                <SideBar />
                <Body>
                    <Title>Listado de Pacientes</Title>
                    <Header id="header">
                        <IconContainer>
                            <Icon src={cardIcon} />
                        </IconContainer>
                        <HeaderInfo>

                            <HeaderTitle>Listado de Pacientes</HeaderTitle>
                            <HeaderSubtitle>Visualización de Pacientes</HeaderSubtitle>
                        </HeaderInfo>
                        <HeaderSearcher>
                            <Searcher onChange={(e) => handleSearch(e)} />
                        </HeaderSearcher>
                    </Header>
                    <ButtonsContainer>
                        <Button variant="outline-primary" onClick={() => handleAddPatient()}><ButtonText>+ Nuevo Paciente</ButtonText></Button>
                        <CSVLink data={patients}>
                            <Button variant="outline-primary" onClick={() => handleDownloadCSV()}><ButtonText><ButtonIcon src={documentIcon} /> Download CSV</ButtonText></Button>
                        </CSVLink>
                    </ButtonsContainer>
                    <DispositionContainer>
                        <Icon src={listIcon} margin onClick={() => setDisposition('list')} />
                        <Icon src={mosaicIcon} margin onClick={() => setDisposition('mosaic')} />
                        <IconNumber onClick={() => setPageSize(5)}>5</IconNumber>
                        <IconNumber onClick={() => setPageSize(10)}>10</IconNumber>
                        <IconNumber onClick={() => setPageSize(15)}>15</IconNumber>
                    </DispositionContainer>
                    {
                        disposition === 'list'
                            ? <ListDisplay patients={paginatedPatients} />
                            : <MosaicDisplay patients={paginatedPatients} />
                    }
                    <Modal show={createPatient} onHide={() => setCreatePatient(false)}>
                        <Modal.Header>
                            <Modal.Title>Nuevo Paciente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="surnam">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => setSurname(e.target.value)}
                                        placeholder="Apellidos"
                                        value={surname}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="birthdate">
                                    <Form.Label>Fecha de nacimiento{ } </Form.Label>
                                    <br></br>
                                    <DatePicker
                                        showYearDropdown="true"
                                        scrollableYearDropdown="true"
                                        selected={birthday}
                                        startDate={new Date('1900-01-01T00:00:00')}
                                        onChange={(date) => setBirthday(date)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Sexo</Form.Label>
                                    <br></br>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option selectedValue={gender === 'masculino'} value="masculino">masculino</option>
                                        <option selectedValue={gender === 'femenino'} value="femenino">femenino</option>
                                    </select>

                                </Form.Group>
                                <br></br>
                                <Form.Group className="mb-3" controlId="center">
                                    <Form.Label>Clínica</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Clínica"
                                        value={clinic}
                                        onChange={(e) => { setClinic(e.target.value) }}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Recortar Alineadores:</Form.Label>
                                    <br></br>
                                    <Form.Check
                                        inline
                                        label="Recortar dejando 1-3 mm de encía"
                                        name="alineadores"
                                        type="radio"
                                        onChange={() => setCut('partial')}
                                        checked={cut === 'partial'}
                                    />
                                    <Form.Check
                                        inline
                                        label="Recortar a nivel de los cuellos"
                                        name="alineadores"
                                        type="radio"
                                        onChange={() => setCut('total')}
                                        checked={cut === 'total'}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>¿SecretRetainer?
                                    </Form.Label>
                                    <br></br>
                                    <Form.Check
                                        inline
                                        label="Sí"
                                        name="secretRetainer"
                                        type="radio"
                                        onChange={() => setSecretRetainer(true)}
                                        checked={secretRetainer}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="secretRetainer"
                                        type="radio"
                                        onChange={() => setSecretRetainer(false)}
                                        checked={secretRetainer === false}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" type="submit" onClick={() => handleCreatePatient()}>
                                Guardar
                            </Button>
                            <Button variant="secondary" onClick={() => setCreatePatient(false)}>
                                Cancelar
                            </Button>
                            <Button variant="danger" onClick={() => handleClearForm()}>
                                Limpiar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <PaginationContainer>
                        <Pagination>{items}</Pagination>
                    </PaginationContainer>
                </Body>
            </MainContainer>
        </div>
    )
}

export default Patients;