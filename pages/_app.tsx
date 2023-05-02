import '@/styles/globals.scss'
import '@/styles/charactersheet.scss'
import 'react-tooltip/dist/react-tooltip.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title key="title">VTM</title>
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}
