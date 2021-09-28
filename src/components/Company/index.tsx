import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Title, Content } from './styles';
import { Loading } from '../Loading';



interface CompanyData {
    id: string;
    name: string
}

export function Company() {
    const [company, setCompany] = useState<CompanyData[]>([])
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        api.get('https://my-json-server.typicode.com/tractian/fake-api/companies')
            .then(response => setCompany(response.data))

        //Loading
        setIsLoad(false);

    }, [])
    return (
        <>
            {isLoad ? <Loading /> :
                <>
                    {isLoad ? <Loading /> :
                        <>
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
                    }

                </>
            }

        </>
    );
}