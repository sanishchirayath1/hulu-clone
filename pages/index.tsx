import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import Results from '../components/Results'
import requests from '../utils/requests'


const Home = ({results}) => {
  console.log(results)
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu-clone</title>
        <meta name="description" content="Hulu clone made to learn next and sass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Results results={results}/>
      </Layout>
    </div>
  )
}
export default Home

export async function getServerSideProps(context) {

  const genre = context.query.genre
  const results = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  const data = await results.json()

  return {
    props: {
      results: data.results,
    }
  }

}