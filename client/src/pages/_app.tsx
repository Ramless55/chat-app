import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Chat App</title>
      <meta name="description" content="Chat App - the best app to chatting with your friends" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="" />
    </Head>
    <Component {...pageProps} />
  </>
}
