import '@/styles/globals.scss'
import '@/styles/fichePerso.scss'
import '@/styles/disciplines.scss'
import '@/styles/lignees.scss'
import '@/styles/regles.scss'
import '@/styles/des.scss'
import 'react-tooltip/dist/react-tooltip.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import { Character } from '@/interfaces/character'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }: AppProps) {

  return(
    <>
      <Head>
        <title key="title">VTM</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  ) 
}
