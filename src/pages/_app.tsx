import {AppProps} from 'next/app';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import withNProgress from 'next-nprogress';
import NprogressStyles from 'next-nprogress/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NprogressStyles color="#e34234" spinner={false} />
    <GlobalStyle />
    <Header />
    <Component {...pageProps} />
    </>
  )
}

const msDelay = 200;
const configOptions = { trickleSpeed: 50 }; 
export default withNProgress(msDelay, configOptions)(MyApp);
