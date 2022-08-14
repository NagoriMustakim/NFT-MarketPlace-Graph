import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useMoralis } from 'react-moralis'
import { useQuery } from '@apollo/client'
import GET_ACTIVE_ITEMS from '../constant/sub-graph'
import NFTBox from '../components/NFTBOX'
export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis()
  const chainString = chainId ? parseInt(chainId).toString() : 31337
  // const RinkebychainId = 4
  const nftMarketplaceRinkebyAddress = "0x88300f2D211d7cE9D723422F252C411b3B4F154b";
  const { loading, error, data: listedNfts /* means we changing name data to listedNfts*/ } = useQuery(GET_ACTIVE_ITEMS)
  return (

    <div className={styles.container}>
      <Head>
        <title>NFT MarketPlace</title>
        <meta name="description" content="BUY AND SELL NFTs" />
        <link rel="icon" href="/n.ico" />
      </Head>
      <h1 className={styles.welcome}>Welcome to NFT MarketPlace</h1>
      <div className="container mx-auto">
        <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
        <div className="flex flex-wrap">
          {isWeb3Enabled ? (
            loading || !listedNfts ? (
              <div>Loading...</div>
            ) : (
              listedNfts.activeItems.map((nft) => {
                console.log(nft)
                const { price, nftAddress, tokenId, seller } = nft
                return (
                  <div>
                    <NFTBox
                      price={price}
                      nftAddress={nftAddress}
                      tokenId={tokenId}
                      marketplaceAddress={nftMarketplaceRinkebyAddress}
                      seller={seller}
                      key={`${nftAddress}${tokenId}`}
                    />
                  </div>
                )
              })
            )
          ) : (
            <div>Web3 Currently Not Enabled</div>
          )}
        </div>
      </div>

    </div >
  )
}
