import Head from 'next/head'
import Header from '../../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube</title>
        <meta name="description" content="Youtube clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>
  )
}
