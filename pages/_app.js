import '../styles/globals.css'
import Layout from "../components/layout/app-pages-layout/layout";
import {Provider} from "react-redux";
import store from "../src/app/store";
import {AnimatePresence, motion} from "framer-motion";
import {SessionProvider} from "next-auth/react";
import {AppHead} from "../src/Head-Components/app-head";


function MyApp({Component, pageProps: {session, ...pageProps},}) {


    return (
        <AnimatePresence mode='wait'>
            <Provider store={store}>
                <AppHead/>
                <SessionProvider session={session}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            </Provider>
        </AnimatePresence>

    )
}

export default MyApp


