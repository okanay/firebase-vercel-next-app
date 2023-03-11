import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {changeSideNavigationTypeToClosed} from "../redux-features/extensionNavigation/extensionNavigationSlicer";

const useMediaQuery = (width,mainGroup, mediaGroup) => {

    const dispatch = useDispatch();
    const [framerMediaQuery, setFramerMediaQuery] = useState("close");
    useEffect(() => {
        function handleResize() {
            if (window.matchMedia(`(max-width: ${width})`).matches) {
                setFramerMediaQuery(mainGroup);
            } else {
                setFramerMediaQuery(mediaGroup);
                dispatch((changeSideNavigationTypeToClosed()))
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