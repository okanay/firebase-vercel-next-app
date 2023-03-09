import {getSession} from "next-auth/react";
export default function Home({children}) {


    return (<div></div>)
}
export async function getServerSideProps(context) {

    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: {
            data: session,
        },
    };
}