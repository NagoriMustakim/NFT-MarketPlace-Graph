import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT MarketPlace</title>
        <meta name="description" content="BUY AND SELL NFTs" />
        <link rel="icon" href="/n.ico" />
      </Head>

      <h1 className={styles.welcome}>Welcome to NFT MarketPlace</h1>
      
    </div >
  )
}
