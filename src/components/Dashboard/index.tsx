import {Container, Content, Title} from './styles';
import api from '../../services/api';
import { useState, useEffect } from 'react';

interface CompanyData {
    name: string;
}

interface UnitsData {
    id: number;
    name: string;

}

export function Dashboard (){
    const [company,setCompany] = useState({} as CompanyData);
    const [units, setUnits] = useState<UnitsData[]>([]);
    useEffect(()=>{
        async function Load() {
           const response1 = await api.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/1`)
            setCompany(response1.data);

        const response = await api.get(`https://my-json-server.typicode.com/tractian/fake-api/units`)
        const itens = response.data;

        const obj1 = {url: "https://lcmtreinamento.com.br/wp-content/uploads/2019/11/fabrica.jpg"}
        const obj2 = {url: "https://criticalhits.com.br/wp-content/uploads/2021/08/re-zero-season-2-screenshot-of-emilia.jpg"}
let item1: UnitsData;

item1 = itens[0]
let item2 = itens[1];

            setUnits([{...obj1,item1}, {...obj2, item2}]);
        }

        Load()
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
        <Content > se atualizar dps de fzr uma mudança ele fica assim po html bugado kkkkkk

        {units.map(unity =>
            
                <div key={unity.id}>
                {/* <img src="https://lh3.googleusercontent.com/proxy/oMpnDHm9RTiW8V-olEGmGcqRHg1SSPePIEb_Ase8sahmOzaOF-osrbSMd5gT6msUnrbIaUyLIWnbC8LOhO6kDWeAiqyWQBH2XtmDofA1lbIPhN8KvY-wYxvl0pUhOxxPlke2coWQo6o01wrw"alt="img-api" /> */}
                <img src={unity.url} />
                <strong>{unity.name}</strong>
            </div>
            // <div>
            //     <img src="https://lcmtreinamento.com.br/wp-content/uploads/2019/11/fabrica.jpg"alt="img-api" />
                
            //     <strong>{unity.name}</strong>
            // </div>
            
            )}
            </Content>

        </>
    );
}