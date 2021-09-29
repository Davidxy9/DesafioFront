import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from 'react';
import api from '../../services/api';

interface UnitsData {
    //id: number;
    name: string;
}

interface ActivesData {
    metrics: {
        totalCollectsUptime: number;
    }

}

interface IDados {
    name: string;
    data: number[]
}

interface ActivesNameData {
    name: string[]
}

export function UnitsGraph() {
    //state para usar os ativos em array nos graficos
    const [actives, setActives] = useState<IDados[]>([])

    const[activesName, setActivesName] = useState<ActivesNameData[]>([])


    useEffect(() => {

        async function Load() {
            //Buscando unidade e seus collects
            const Unidades = await api.get('https://my-json-server.typicode.com/tractian/fake-api/units/1')
            const Unidades2 = await api.get('https://my-json-server.typicode.com/tractian/fake-api/units/2')

            const assets = await api.get('https://my-json-server.typicode.com/tractian/fake-api/assets')
            const list = Unidades.data;
            const list2 = Unidades2.data;
            const aux = [];
            const aux3 = [];

            const filterAssets = assets.data.filter((option) => option.unitId === 1 )
            const filterAssets2 = assets.data.filter((option) => option.unitId === 2 )

        //UNIDADE 1:
            filterAssets.map(option => (
                aux.push(option.metrics.totalCollectsUptime)
            ))

            //buscando o nome do ativo
            const aux2 = [];
            filterAssets.map(option =>(
                aux2.push(option.name)
            ))


        //UNIDADE 2:
        filterAssets2.map(option => (
            aux3.push(option.metrics.totalCollectsUptime)
        ))
        setActives([{ name: list.name, data: aux },{ name: list2.name, data: aux3 } ])
          const aux4 = [];
            filterAssets2.map(option =>(
                aux4.push(option.name)
            ))

            setActivesName([...aux2, ...aux4]);

        
    
    }

        Load()
    }, [])

    const configUnitsGraph = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ativos da Unidade Jaguar'
        },
        
        xAxis: {
               categories: activesName,

            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total de Coletas Uptime'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: actives

    }
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={configUnitsGraph}
        />
    );
}