import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu-clone</title>
        <meta name="description" content="Hulu clone made to learn next and sass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Hello People
      </Layout>
    </div>
  )
}
