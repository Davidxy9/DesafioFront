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
    const [units, setUnits] = useState<UnitsData>();
    //state para usar os ativos em array nos graficos
    const [actives, setActives] = useState<IDados[]>([])
    const [activesTwo, setActivesTwo] = useState<IDados[]>([])

    const[activesName, setActivesName] = useState<ActivesNameData[]>([])
    const[activesNameTwo, setActivesNameTwo] = useState<ActivesNameData[]>([])


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

            console.log('MAUUU',filterAssets2)
        //UNIDADE 1:
            filterAssets.map(option => (
                aux.push(option.metrics.totalCollectsUptime)
            ))

            // setActives([{ name: list.name, data: aux }])

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
        // setActivesTwo([{ name: list2.name, data: aux3 }])
          const aux4 = [];
            filterAssets2.map(option =>(
                aux4.push(option.name)
            ))

            // setActivesNameTwo(aux4)
            setActivesName([...aux2, ...aux4]);

            console.log('DADOS SECUNDARIOS',activesTwo)
        
    
    }

        Load()
    }, [])

    console.log(actives)
    const configUnitsGraph = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Ativos da Unidade Jaguar'
        },
        
        xAxis: {
               categories: activesName,
        /*     categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ], */
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
        /* series: [{
            name: units,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
        }] */
    }
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={configUnitsGraph}
        />
    );
}