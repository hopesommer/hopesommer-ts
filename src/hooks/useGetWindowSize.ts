import { useEffect, useState } from 'react'


export const useGetWindowSize = () => {
    const [isMobile, setIsMobile] = useState<Boolean>(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.screen.width <= 768);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return {
        isMobile
    }
}