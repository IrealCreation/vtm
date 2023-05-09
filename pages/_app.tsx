import '@/styles/globals.scss'
import '@/styles/charactersheet.scss'
import 'react-tooltip/dist/react-tooltip.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, createContext } from 'react';
import { Character } from '@/interfaces/character'
import { defaultCharacter } from '@/managers/characterManager'

const CharacterContext = createContext(defaultCharacter());

export default function App({ Component, pageProps }: AppProps) {

  const [character, setCharacter] = useState<Character>(defaultCharacter());

  return(
    <>
      <Head>
        <title key="title">VTM</title>
      </Head>
      <CharacterContext.Provider value={character}>
        <Component {...pageProps} />
      </CharacterContext.Provider>
    </>
  ) 
}
