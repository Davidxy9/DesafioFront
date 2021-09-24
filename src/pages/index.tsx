import Head from 'next/head';
import { Dashboard } from '../components/Dashboard';
import { UnitsGraph } from '../components/UnitsGraph'
export default function Home() {
  return (
    <>
    <Head>
      <title>Desafio</title>
    </Head>
     <Dashboard/>
     <UnitsGraph />
     </>

  )
}
