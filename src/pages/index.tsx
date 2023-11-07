'use client'
import Head from 'next/head'
import Views from '../../components/topBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>YouTube</title>
      </Head>
      <Views/>
    </div>
  )
}
