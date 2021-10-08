import Head from 'next/head';
import {Container} from '../styles/global';
export default function Home() {
  return (
    <>
    <Head>
      <title>Vought</title>
    </Head>
    <Container>
                <div>
                    <img
                        src="/images/foi.png"
                        alt="ImageCompany"
                    />
                    <h1>Controle industrial e automatização</h1>
                </div>

            </Container>
     </>

  )
}
