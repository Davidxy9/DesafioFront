import Head from 'next/head';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Title, Content } from './styles';


interface CompanyData {
    id: string;
    name: string
}

export default function Companies() {
    const [company, setCompany] = useState<CompanyData[]>([])

    useEffect(() => {
        api.get('https://my-json-server.typicode.com/tractian/fake-api/companies')
            .then(response => setCompany(response.data))
    }, [])
    return (
        <>
            <Head>
                <title>Desafio | Company</title>
            </Head>


            <Title>Conheça nossas Empresas:</Title>
            <Content >
                {company.map(comp =>
                    <a href={`https://my-json-server.typicode.com/tractian/fake-api/companies/${comp.id}`}>
                    <div key={comp.id}>
                        <img src="/images/tercer.jpg" alt="imageUnity" />
                        <strong>{comp.name}</strong>
                    </div>
                    </a>
         

                )}
            </Content>

        </>

    )
}