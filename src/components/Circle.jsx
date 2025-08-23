import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

const Circle = () => {
    const circleRef = useRef()
    const [inFooter, setInFooter] = useState(false)

    useEffect(() => {

        const handleScroll = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            // at top
            if (scrollTop === 0 && e.deltaY < 0) return;

            // at bottom
            if (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0) return;

            // only rotate if scrolling is possible
            if (e.deltaY > 0) {
                gsap.to(circleRef.current, {
                    rotate: "+=30",
                    duration: 1,
                    ease: "linear",
                });
            } else {
                gsap.to(circleRef.current, {
                    rotate: "-=30",
                    duration: 1,
                    ease: "linear",
                });
            }
        };


        window.addEventListener("wheel", handleScroll)
        return () => window.removeEventListener("wheel", handleScroll)
    }, [])

    useEffect(() => {
        // Detect footer visibility
        const footer = document.querySelector("footer")
        if (!footer) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setInFooter(entry.isIntersecting) // true when footer is visible
                })
            },
            { threshold: 0.2 }
        )

        observer.observe(footer)
        return () => observer.disconnect()
    }, [])

    return (
        <div className="hidden lg:block lg:fixed lg:bottom-5 lg:right-5 lg:z-50">
            <div className="relative">
                <img
                    ref={circleRef}
                    src="./circle.svg"
                    alt="circle"
                    className={`${inFooter ? "" : "invert"}`}
                />
                <img
                    src="./arrow.svg"
                    alt="arrow"
                    className={`absolute -my-22 mx-15 ${inFooter ? "" : "invert"} z-10`}
                />
            </div>
        </div>


    )
}

export default Circle
