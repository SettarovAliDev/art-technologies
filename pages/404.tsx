import Layer from '../components/Layer/Layer'
import Link from 'next/link'
import Head from 'next/head'

import styles from './404.module.css'

const Exhibition = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="description" content="page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layer>
        <div className={styles.container}>
          <Link passHref href="/">
            <a className={styles.back}>&larr; Back</a>
          </Link>
          <div>Page Not Found</div>
        </div>
      </Layer>
    </>
  )
}

export default Exhibition
