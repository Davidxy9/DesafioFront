import {AppProps} from 'next/app';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import NextProgress from "next-nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextProgress delay={300} options={{ showSpinner: false }} />
    <GlobalStyle />
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
