import { Content, Title } from './styles';
import api from '../../services/api';
import { useState, useEffect } from 'react';

interface CompanyData {
    name: string;
}

interface UnitsData {
    id: number;
    name: string;
    url: string;
}

export function Unity() {
    const [company, setCompany] = useState({} as CompanyData);
    const [units, setUnits] = useState<UnitsData[]>([]);
    useEffect(() => {
        async function Load() {
            const response1 = await api.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/1`)
            setCompany(response1.data);

            const response = await api.get(`https://my-json-server.typicode.com/tractian/fake-api/units`)
            const itens = response.data;

            const obj = {
                id: itens[0].id,
                name: itens[0].name,
                url: "https://lcmtreinamento.com.br/wp-content/uploads/2019/11/fabrica.jpg"
            }

            const obj2 = {
                id: itens[1].id,
                name: itens[1].name,
                url: "https://lh3.googleusercontent.com/proxy/bzFr0zkmFEYEtLEzfcYzRDuSPtardZhB982TqrgNio9oeJhQq_Zc0RW1LCrLIkDwQkbAhBcR6ZuS93zzWRHWlylyZof_QuSPLmMpACd-6NjzPuGrL1MeXUh0yj0NtQkeQ7a3U4aPUPMekugZ"
            }

            setUnits([obj, obj2])
        }

        Load()

    }, [])


    return (
        <>

            <Title>Nossas unidades</Title>
            <Content >
                {units.map(unity =>

                    <div key={unity.id}>
                        <img src={unity.url} alt="imageUnity" />
                        <strong>{unity.name}</strong>
                    </div>
         

                )}
            </Content>

        </>
    );
}