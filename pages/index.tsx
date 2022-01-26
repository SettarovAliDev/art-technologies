import type { NextPage } from 'next'
import Head from 'next/head'
import ExhibitionsList from '../components/ExhibitionsList/ExhibitionsList'
import Layer from '../components/Layer/Layer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art Technologies</title>
        <meta name="description" content="Art Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layer>
        <ExhibitionsList />
      </Layer>
    </>
  )
}

export default Home
