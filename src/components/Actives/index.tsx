import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';
import { useState, useEffect } from 'react';

interface ActivesData {
    status: string;
    healthscore: number;
} 


export function Actives () {
    const [actives, setActives] = useState<ActivesData[]>([])

    useEffect(() => {
        async function Load (){
            const assets = await api.get('https://my-json-server.typicode.com/tractian/fake-api/assets')
            
            const aux = [];

            console.log('recebi do assets', assets)
            
            assets.data.map(option => (
                aux.push({name: option.status, y: option.healthscore})
            ));

            setActives(aux);

        }
        Load()

    },[])

    const configActivesGraph ={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
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
            //[
            //     {
            //     name: 'Chrome',
            //     y: 61.41,
            //     sliced: true,
            //     selected: true
            // }, {
            //     name: 'Internet Explorer',
            //     y: 11.84
            // }, {
            //     name: 'Firefox',
            //     y: 10.85
            // }, {
            //     name: 'Edge',
            //     y: 4.67
            // }, {
            //     name: 'Safari',
            //     y: 4.18
            // }, {
            //     name: 'Sogou Explorer',
            //     y: 1.64
            // }, {
            //     name: 'Opera',
            //     y: 1.6
            // }, {
            //     name: 'QQ',
            //     y: 1.2
            // }, {
            //     name: 'Other',
            //     y: 2.61
            // }]
        }]
    }

    return (
            <HighchartsReact
            highcharts={Highcharts}
            options={configActivesGraph}
            />
    );
}
