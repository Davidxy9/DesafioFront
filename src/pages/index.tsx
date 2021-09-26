import Head from 'next/head';
import { Actives } from '../components/Actives';
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
     <Actives />
     </>

  )
}
