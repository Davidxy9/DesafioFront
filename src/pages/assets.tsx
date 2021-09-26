import Head from 'next/head';
import { Actives } from '../components/Actives';
import { UnitsGraph } from '../components/UnitsGraph'

export default function Assets(){
    return (
        <>
            <Head>
                <title>Desafio | Ativos</title>
            </Head>
            <Actives />
        </>
    )
}