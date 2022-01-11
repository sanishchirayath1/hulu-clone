import Head from 'next/head'
import type { GetServerSideProps } from 'next'
import type { Results } from '../type'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import ResultsPage from '../components/Results'
import requests from '../utils/requests'


const Home = ({results} : Results) => {
  console.log(results)
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu-clone</title>
        <meta name="description" content="Hulu clone made to learn next and sass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ResultsPage results={results}/>
      </Layout>
    </div>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  const genre = context.query.genre as string
  const results = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  
  const data: {results: Results} = await results.json()

  return {
    props: {
      results: data.results,
    }
  }

}