import Navigation from "./navigation";
import Head from "next/head";
import Theme from "./theme";
const Layout = ({children}) => {

    return (
        <Theme>
        <div className={'mx-auto max-w-screen-desktop py-2 '}>
            <Head>
                <title>Firebase App Tailwind</title>
                <meta name="description" content="Firebase Backend - For Next JS Project. - Using also Tailwind CSS."/>
            </Head>
            <Navigation/>
            {children}
        </div>
        </Theme>
    )
}

export default Layout

