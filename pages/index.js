import Head from "next/head";
import {animationStore} from "../framer-motion-animations/store";
import {motion as m} from "framer-motion";
import {useEffect, useState} from "react";

export default function Home({children}) {

    const items = ["Item 1", "Item 2", "Item 3"];

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        },
        hidden: {}
    };

    const itemVariants = {
        visible: {
            opacity: 1,
            y: 0
        },
        hidden: {
            opacity: 0,
            y: 50
        }
    };

    const [isVisible, setIsVisible] = useState(true);

    return (<>
        <Head>
            <title>Next Firebase Auth</title>
            <meta name='description' content='Next JS Firebase Auth Example'/>
        </Head>
    </>)
}
