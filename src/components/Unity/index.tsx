import { Content, Title } from './styles';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Loading } from '../Loading';


interface UnitsData {
    id: number;
    name: string;
    url: string;
}

export function Unity() {
    const [units, setUnits] = useState<UnitsData[]>([]);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        async function Load() {


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
                url: "https://www.highsolutions.com.br/wp-content/uploads/2019/04/ind%C3%BAstria-5.png"
            }

            setUnits([obj, obj2])
        }
        //Loading
        setIsLoad(false);

        Load()

    }, [])


    return (
        <>
            {isLoad ? <Loading /> :
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
            }


        </>
    );
}