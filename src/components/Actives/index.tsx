import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Container, List, Graph } from './styles';
import { FiChevronRight } from 'react-icons/fi';


interface ActivesData {
    status: string;
    healthscore: number;
}

interface AllActivesData {
    id: string;
    model: string;
    status: string;
    healthscore: string;
    name: string;
    image: string;
    specifications: {
        power: string;
        maxTemp: string;
        rpm: string;
    }
    metrics: {
        totalCollectsUptime: string;
        totalUptime: string;
        lastUptimeAt: Date;
    }
    unitId: string;
    companyId: string;
}

export function Actives() {
    const [actives, setActives] = useState<ActivesData[]>([])
    const [allActives, setAllActives] = useState<AllActivesData[]>([])

    useEffect(() => {
        async function Load() {
            const assets = await api.get('https://my-json-server.typicode.com/tractian/fake-api/assets')

            const aux = [];
            const aux2 = [];

            assets.data.map(option => (
                aux.push({ name: option.status, y: option.healthscore }),
                aux2.push(option)
            ));

            setActives(aux);

            //PEGANDO TODOS OS ATIVOS E EXIBINDO-OS EM UMA LIST
            //ainda haverá alterações com o campo de busca, rlx david
            setAllActives(aux2)
        }
        Load()

    }, [])

    const configActivesGraph = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Status dos ativos e sua % em saúde'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [
            {
                name: 'Healthscore',
                colorByPoint: true,
                data: actives

            }]
    }

    return (
        <>
            <Container>
                <div>
                    <h1>
                        Lista de ativos - Características
                    </h1>
                </div>
            </Container>
            <List>
                {allActives.map(active => (
                    <a
                        key={active.name}
                        href={`https://my-json-server.typicode.com/tractian/fake-api/assets/${active.id}`}>

                        <img
                            src={active.image}
                            alt={active.name}
                        />

                        <div>
                            <strong>Nome: {active.name}</strong>
                            <p>Saúde: {active.healthscore}</p>
                            <p>Modelo: {active.model}</p>
                            <p>Estado atual: {active.status}</p>
                            <p>Total de Coletas: {active.metrics.totalCollectsUptime}</p>
                            <p>Total de Horas de Coletas: {active.metrics.totalUptime}</p>
                            <p>Data da Ultima Coleta: {active.metrics.lastUptimeAt}</p>
                            <p>RPM: {active.specifications.rpm}</p>


                        </div>

                        <ul>
                            <li>
                                <strong>{active.specifications.power} - </strong>
                                <span>Potência em kWh</span>
                            </li>
                            <li>
                                <strong>{active.specifications.maxTemp} - </strong>
                                <span>Temperatura Máxima(Cº)</span>
                            </li>
                        </ul>
                        <FiChevronRight size={20} />

                    </a>
                ))}
            </List>
            
            <Graph>
                <div>
                    <h1>
                        Lista de ativos - Gráfico
                    </h1>
                </div>
        
            </Graph>
            <HighchartsReact
                highcharts={Highcharts}
                options={configActivesGraph}
            /> 

        </>
    );
}
