import Head from 'next/head';
import { Company } from '../components/Company';

export default function Companies() {
    return (
        <>
            <Head>
                <title>Desafio | Company</title>
            </Head>

            <Company />
        </>

    )
}