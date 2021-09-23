import {Container, Content} from './styles';
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

        <Container>
            <div>
                <img
                    src="/images/foi.png"
                    alt="ImageCompany"
                />
                <h1>Controle industrial e automatização</h1>
            </div>

        </Container>
    );
}