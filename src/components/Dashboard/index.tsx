import {Container, Content, Title} from './styles';
import api from '../../services/api';
import { useState, useEffect } from 'react';

interface CompanyData {
    name: string;
}

export function Dashboard (){
    const [company,setCompany] = useState({} as CompanyData);
    useEffect(()=>{
        api.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/1`)
            .then(response => setCompany(response.data))
    },[])


    return(
        <>
        <Container>
            <div>
                <img
                    src="/images/foi.png"
                    alt="ImageCompany"
                />
                <h1>Controle industrial e automatização</h1>
            </div>
            
        </Container>
        <Title>Nossas unidades</Title>
        <Content>
            <div>
                <img src="https://lh3.googleusercontent.com/proxy/oMpnDHm9RTiW8V-olEGmGcqRHg1SSPePIEb_Ase8sahmOzaOF-osrbSMd5gT6msUnrbIaUyLIWnbC8LOhO6kDWeAiqyWQBH2XtmDofA1lbIPhN8KvY-wYxvl0pUhOxxPlke2coWQo6o01wrw"alt="img-api" />
                
                <strong>Unidade Jaguar</strong>
            </div>
            <div>
                <img src="https://lcmtreinamento.com.br/wp-content/uploads/2019/11/fabrica.jpg"alt="img-api" />
                
                <strong>Unidade Tobias</strong>
            </div>
        </Content>
        </>
    );
}