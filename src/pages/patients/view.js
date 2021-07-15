// Libraries
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CSVLink } from "react-csv";

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
        // TODO Add pacient
        console.log("ADD PATIENT")
    }

    const handleDownloadCSV = () => {
        console.log("DOWNLOAD CSV")
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
                            <Button variant="outline-primary" onClick={() => handleDownloadCSV()}><ButtonText><ButtonIcon src={documentIcon}/> Download CSV</ButtonText></Button>
                        </CSVLink>
                    </ButtonsContainer>
                    <DispositionContainer>
                        <Icon src={listIcon} margin onClick={() => setDisposition('list')}/>
                        <Icon src={mosaicIcon} margin onClick={() => setDisposition('mosaic')}/>
                        <IconNumber onClick={() => setPageSize(5)}>5</IconNumber>
                        <IconNumber onClick={() => setPageSize(10)}>10</IconNumber>
                        <IconNumber onClick={() => setPageSize(15)}>15</IconNumber>
                    </DispositionContainer>
                    {
                        disposition === 'list'
                        ? <ListDisplay patients={paginatedPatients}/>
                        : <MosaicDisplay patients={paginatedPatients}/>
                    }
                </Body>
            </MainContainer>
        </div>
    )
}

export default Patients;