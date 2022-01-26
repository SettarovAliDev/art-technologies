import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import Layer from '../../../components/Layer/Layer'
import Spinner from '../../../components/Spinner/Spinner'

import exhibitionsApi from '../../../api/api'
import { formatDate } from '../../../utils/formatDate'

import { IExhibition } from '../../../types/exhibition.types'

import placeholder from '../../../public/images/placeholder.png'
import styles from './index.module.css'

const Exhibition = () => {
  const router = useRouter()
  const { slug } = router.query

  const [exhibition, setExhibition] = useState<IExhibition | null>(null)

  useEffect(() => {
    const fetchExhibition = async () => {
      if (slug) {
        const response = await exhibitionsApi.get(`exhibitions/${slug}`)
        setExhibition(response.data.data)
      }
    }
    fetchExhibition()
  }, [slug])

  return (
    <>
      <Head>
        <title>Exhibition</title>
        <meta name="description" content="Exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layer>
        {!exhibition ? (
          <Spinner />
        ) : (
          <div className={styles.container}>
            <Link href="/">
              <a className={styles.back}>&larr; Back</a>
            </Link>
            <div>
              <div className={styles.header}>
                <h2 className={styles.title}>{exhibition?.title}</h2>
                <p className={styles.date}>{`${formatDate(
                  exhibition?.aic_start_at
                )} - ${formatDate(exhibition?.aic_end_at)}`}</p>
              </div>
              <div className={styles.content}>
                <div className={styles.logoouter}>
                  <img
                    className={styles.logo}
                    src={exhibition?.image_url || placeholder.src}
                    alt={exhibition?.description}
                  />
                </div>

                <div className={styles.description}>
                  {exhibition?.description}
                </div>
              </div>
            </div>
          </div>
        )}
      </Layer>
    </>
  )
}

export default Exhibition
