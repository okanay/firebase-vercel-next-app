import '../styles/globals.css'
import Layout from "../components/layout/app-pages-layout/layout";
import Head from "next/head";

import {Provider} from "react-redux";
import store from "../src/app/store";
import {AnimatePresence, motion} from "framer-motion";
import {SessionProvider} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Loading} from "../components/Loading";


function MyApp({Component, pageProps: {session, ...pageProps},}) {

    const LoadingRouter = () => {
        const router = useRouter()
        const [loading, setLoading] = useState(false)

        useEffect(() => {

            const handleStart = (url) => (url !== router.pathname) && setLoading(true)
            const handleComplete = (url) => (url === router.pathname) && setTimeout(() => {setLoading(false)}, 500)

            router.events.on('routeChangeStart', handleStart)
            router.events.on('routeChangeComplete', handleComplete)
            router.events.on('routeChangeError', handleComplete)

            return () => {

                router.events.off('routeChangeStart', handleStart)
                router.events.off('routeChangeComplete', handleComplete)
                router.events.off('routeChangeError', handleComplete)

            }

        }, [])

        return loading && <Loading/>
    }

    return (
        <AnimatePresence mode='wait'>
            <Provider store={store}>
                <Head>
                    <meta name="application-name" content="Firebase Auth"/>
                    <meta name="author" content="Okan Ay"/>
                    <link rel="author" href="https://okanay.com"/>
                    <meta name="author" content="Okan"/>
                    <meta name="generator" content="Next.js"/>
                    <meta name="keywords" content="Next.js,React,JavaScript, Firebase, Tailwind CSS"/>
                    <meta name="referrer" content="origin-when-cross-origin"/>
                    <meta name="color-scheme" content="dark,light"/>
                    <meta name="creator" content="Okan Ay"/>
                    <meta name="publisher" content="Okan Ay"/>
                    <meta name="format-detection" content="telephone=no, address=no, email=okanay@hotmail.com"/>
                    <meta name="title" content="Firebase Configure with Next JS"/>
                    <meta content="Tailwind CSS | Firebase Auth Next JS" property="og:title"/>
                    <meta content="@wokanay" name="twitter:site"/>
                    <meta name="description"
                          content="This site tries to explain how to configure Firebase from Next JS Application. "/>
                    <meta name="keywords"
                          content="Tailwind CSS, Next JS, Firebase, Google, Backend, Frontend, Meta Keywords, CSR, React Redux, React"/>
                    <meta name="robots" content="index, follow"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta name="language" content="English, Turkish"/>
                    <meta name="revisit-after" content="5 days"/>
                    <meta name="author" content="Okan Ay"/>
                </Head>
                <SessionProvider session={session}>
                    <Layout>
                        <LoadingRouter/>
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            </Provider>
        </AnimatePresence>

    )
}

export default MyApp


