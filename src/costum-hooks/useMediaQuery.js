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

        handleResize(); // bileşen monte edildiğinde bir kez çalıştırın

        window.addEventListener("resize", handleResize); // resize olayını dinle

        return () => {
            window.removeEventListener("resize", handleResize); // bileşen kaldırıldığında dinlemeyi durdur
        };
    }, []);


    return [framerMediaQuery]
}

export default useMediaQuery