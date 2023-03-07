import Head from "next/head";


export default function Home({children}) {

    return (<div>
            <Head>
                <title>Next Firebase Auth</title>
                <meta name='description' content='Next JS Firebase Auth Example' />
            </Head>
        </div>
    )
}

export async function getServerSideProps({ req, res }) {

    return {
        props: {},
    }
}