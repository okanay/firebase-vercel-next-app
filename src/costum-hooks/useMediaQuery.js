import {useEffect, useState} from "react";

const useMediaQuery = (width,mainGroup, mediaGroup) => {

    const [framerMediaQuery, setFramerMediaQuery] = useState("close");
    useEffect(() => {
        function handleResize() {
            if (window.matchMedia(`(max-width: ${width})`).matches) {
                setFramerMediaQuery(mainGroup);
            } else {
                setFramerMediaQuery(mediaGroup);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return [framerMediaQuery]
}

export default useMediaQuery