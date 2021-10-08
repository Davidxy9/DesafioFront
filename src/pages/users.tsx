import Head from 'next/head';
import { User }  from '../components/User/'

export default function Users(){
    return (
        <>
            <Head>
                <title>Vought | Users</title>
            </Head>
            <User />
        </>

    )
}