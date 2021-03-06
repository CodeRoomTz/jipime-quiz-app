import { Box, Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const handleGetStarted = () => {
    Router.push("/setting")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Jipime Quiz App</title>
        <meta name="description" content="Generated by @nelsonfr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Jipime Quiz App</h1>
        <Box mt={2}>
          <Button onClick={handleGetStarted} variant="contained">
            Get Started
          </Button>
        </Box>
      </main>
    </div>
  )
}

export default Home
