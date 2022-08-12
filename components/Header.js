import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div>
            <ul>
                <Link href="/">
                    <a className={styles.navbar}>Home</a>
                </Link>
                <Link href="/aboutus">
                    <a className={styles.navbar}>About Us</a>
                </Link>
                <Link href="/blog">
                    <a className={styles.navbar}>Blog</a>
                </Link>
                <Link href="/contactus">
                    <a className={styles.navbar}>contacting...</a>
                </Link>
                <ConnectButton></ConnectButton>
            </ul>

        </div>
    )
}

export default Header