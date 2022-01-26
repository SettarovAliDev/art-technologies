import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import ExhibitionsList from '../components/ExhibitionsList/ExhibitionsList'
import Layer from '../components/Layer/Layer'
import { IExhibition } from '../types/exhibition.types'

import exhibitionsApi from '../api/api'

interface IHomeProps {
  exhibitions: IExhibition[]
}

const Home = ({ exhibitions }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>Art Technologies</title>
        <meta name="description" content="Art Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layer>
        <ExhibitionsList exhibitions={exhibitions} />
      </Layer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const exhibitions = await exhibitionsApi.get('exhibitions?page=1')

    return {
      props: {
        exhibitions: exhibitions.data.data,
      },
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    }
  }
}

export default Home
