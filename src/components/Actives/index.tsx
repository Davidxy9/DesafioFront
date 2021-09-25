import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';
import { useState, useEffect } from 'react';

/* interface ActivesData {
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
} */


export function Actives () {
    const [actives, setActives] = useState<ActivesData[]>([]);
    //faz uma chamada a api e guarda no estado.
    useEffect(() => {

    }, []);
    return (
 
    );
}
