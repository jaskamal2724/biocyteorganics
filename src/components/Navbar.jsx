import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const location = useLocation()

    const svgRef = useRef();
    const navitems = useRef();

    const logoAnimate = () => {
        gsap.from("h1 span", {
            y: -300,
            opacity: 0,
            duration: 1.8,
            stagger: 0.5,
            ease: "elastic.out(1,0.3)",
        })
    }

    useEffect(() => {
        if (location.pathname === "/" && !loaded) {
            gsap.to(svgRef.current, {
                scale: 1.2,
                repeat: -1,
                yoyo: true,
                duration: 0.6,
                ease: "power1.inOut",
            });

            if (navitems.current) {
                gsap.fromTo(
                    navitems.current.querySelectorAll("li"),
                    { y: -200, opacity: 0 },
                    { y: 0, opacity: 1, duration: 2, delay: 0.5, ease: "power3.out", stagger: 0.2 }
                );
            }

            logoAnimate()
            setLoaded(true)
        }

    }, [loaded,location]);

    return (
        <>
            <nav className="flex items-center justify-between p-4 shadow-md bg-[#F8F3DE]">
                {/* Logo Section */}
                <div className="flex gap-5">
                    <img src="./logo.png" alt="" className="scale-70" />
                </div>

                {/* Navigation Links */}
                <ul ref={navitems} className="md:flex space-x-6 font-medium hidden">
                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/" className="text-slate-700">Home</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/about" className="text-slate-700">About Us</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/products" className="text-slate-700">Products & Services</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/career" className="text-slate-700">Careers</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/contact" className="text-slate-700">Contact</a></li>

                    
                </ul>

                {/* mobile navigation hamburger */}
                <div className="md:hidden">
                    {showMenu &&
                        <div className="text-slate-700 cursor-pointer" onClick={() => setShowMenu(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>
                        </div>
                    }

                    {!showMenu &&
                        <>
                            <div className="text-red-500 cursor-pointer" onClick={() => setShowMenu(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </div>

                        </>
                    }
                </div>

            </nav>

            {!showMenu &&
                <nav className="relative">
                    <div className="absolute top-5 w-full flex justify-center">
                        <ul className="flex flex-col gap-2 bg-[#f2f8f8] p-4 rounded-lg">
                            <li className="text-center text-slate-700">Home</li>
                            <li className="text-center text-slate-700">About Us</li>
                            <li className="text-center text-slate-700">Contact Us</li>
                            <li className="text-center text-slate-700">Products & Services</li>
                        </ul>
                    </div>
                </nav>
            }

        </>
    );
};

export default Navbar;
