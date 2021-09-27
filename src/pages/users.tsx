import Head from 'next/head';
import { User }  from '../components/User/'

export default function Users(){
    return (
        <>
            <Head>
                <title>Desafio | Users</title>
            </Head>
            <User />
        </>

    )
}