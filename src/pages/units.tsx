import Head from 'next/head';
import { UnitsGraph } from '../components/UnitsGraph';
import { Unity } from '../components/Unity';


export default function Units() {
    return (
        <>
            <Head>
                <title>Desafio | Units</title>
            </Head>
            <Unity/>
            <UnitsGraph />
        </>

    )
}