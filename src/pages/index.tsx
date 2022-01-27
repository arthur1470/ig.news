import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>      
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <Header />
      <h1>Ola Mundo</h1>
    </>
  )
}
