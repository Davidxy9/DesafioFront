import {Container} from './styles';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Content } from '../Header/styles';

interface ActivesData {
    id: number;
    status: string;
    healthscore: number;
    specifications: {
        maxTemp: number;
    };
    metrics: {
        totalCollectsUptime: number;
        totalUptime: number;
        lastUptimeAt: Date;
    }
}

interface OneActiveData {
    id?: number;
    status?: string;
    healthscore?: number;
    specifications?: {
        maxTemp: number;
    }
    metrics: {
        totalCollectsUptime?: number;
        totalUptime?: number;
        lastUptimeAt?: Date;
    }
}

export function Actives () {
    const [actives, setActives] = useState<ActivesData[]>([]);
    const [oneActive, setOneActive] = useState({} as OneActiveData);
    //faz uma chamada a api e guarda no estado.
    useEffect(() => {
        api.get(`https://my-json-server.typicode.com/tractian/fake-api/assets`)
            .then(response => setActives(response.data))

        api.get(`https://my-json-server.typicode.com/tractian/fake-api/assets/1`)
            .then(response => setOneActive(response.data))
    }, []);
    return (
        //ver todos os ativos
        <Container>
            <Content>

            </Content>

            {actives.map(active => (
                <a key={active.id}>
                    
                    <span>status: {active.status}</span>
                    <span>healthscore: {active.healthscore}</span>
                    <strong>totalCollectsUptime: {active.metrics.totalCollectsUptime}</strong>
                    <strong>totalUptime: {active.metrics.totalUptime}</strong>
                    <strong>lastUptimeAt: {active.metrics.lastUptimeAt}</strong>

                </a>

                //ver só um ativo
            ))}
                MIAU MIAU MIAU:::
            
            <strong key={oneActive.id}>
                <span>status:{oneActive.status}</span>
                <span>healthscore:{oneActive.healthscore}</span>
                

                <span></span>
            </strong>
            


        </Container>
    );
}

{/* <span>CERTO:{oneActive.specifications.maxTemp}</span>
                <span>totalCollectsUptime: {oneActive.metrics.totalCollectsUptime}</span>
                <span>totalUptime: {oneActive.metrics.totalUptime}</span>
                <span>lastUptimeAt: {oneActive.metrics.lastUptimeAt}</span> */}
