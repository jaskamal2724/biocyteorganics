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
            <nav className="flex items-center justify-between p-4 shadow-md bg-blue-100">
                {/* Logo Section */}
                <div className="flex gap-5">
                    <div className='h-12 p-2 rounded-xl text-blue-500'>
                        <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-blue-500">
                            <span className="inline-block">B</span>
                            <span className="inline-block">O</span>
                            <span className="inline-block">P</span>
                            <span className="inline-block">L</span>
                        </h1>
                        <h4 className="text-blue-500 text-sm ">Life · Health · Happiness</h4>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul ref={navitems} className="md:flex space-x-6 font-medium hidden">
                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/" className="text-blue-500">Home</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/about" className="text-blue-500">About Us</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/products" className="text-blue-500">Products & Services</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/career" className="text-blue-500">Careers</a></li>

                    <li className="my-2 hover:bg-white px-2 py-2 rounded-xl"><a href="/contact" className="text-blue-500">Contact</a></li>

                    
                </ul>

                {/* mobile navigation hamburger */}
                <div className="md:hidden">
                    {showMenu &&
                        <div className="text-blue-500 cursor-pointer" onClick={() => setShowMenu(false)}>
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
                            <li className="text-center text-blue-500">Home</li>
                            <li className="text-center text-blue-500">About Us</li>
                            <li className="text-center text-blue-500">Contact Us</li>
                            <li className="text-center text-blue-500">Products & Services</li>
                        </ul>
                    </div>
                </nav>
            }

        </>
    );
};

export default Navbar;
