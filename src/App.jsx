import { useEffect, useRef } from "react"
import gsap from "gsap"
import Services from "./components/Services"
import Credentials from "./components/Credentials"
import Circle from "./components/Circle"

function App() {

  const box = useRef()
  const box2 = useRef()

  const hero1 = useRef()

  useEffect(() => {
    gsap.from(hero1.current, {
      x: -600,
      duration: 2,
      opacity: 0
    })

    const tl = gsap.timeline()

    tl.from(box.current, {
      x: 600,
      duration: 3,
      opacity: 0,
    })

    tl.to(box.current,{
      rotate:-3,
      duration:4,
      repeat:-1,
      yoyo:true,
      ease:"linear"
    })

    gsap.fromTo(
      box2.current,
      { y: -300, opacity: 0 },   // starting point
      { y: 0, opacity: 1, duration: 2, ease: "linear" } // ending point
    )
  }, [])

  return (
    <>
      <img
        src="./Ellipse.svg"
        alt="ellipse"
        className="absolute top-[-80px] left-[-90px]"
      />

      <div ref={box2} className='bg-[#D8E8FE] my-6 w-70 rounded-4xl mx-auto flex justify-center'>
        <div className='my-2 text-blue-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
        </div>
        <h2 className='text-center p-2 text-blue-600'>Trusted HealthCare Solutions</h2>
      </div>

      <div className='flex flex-col lg:flex-row justify-center my-26 gap-y-10'>
        <div ref={hero1} className="lg:mx-42">
          <img src="./Ellipse2.svg" alt="ellipse2" className="absolute my-60 -mx-10" />
          <h1 className='text-8xl font-medium md:text-center sm:text-center'>
            <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              Life · Health ·
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
              Happiness
            </span>

          </h1>
          <p className='my-8 text-2xl text-slate-600 leading-relaxed font-medium md:text-center sm:text-center'>BIOCYTE Organics Private Limited (BOPL) is one of India&apos;s <br /> largest mid-sized pharmaceutical companise, providing <br /> innovate healthcare solutions and affordable treatments for <br /> sleep disorders , repiratory ailmemts, and critical care.</p>
          <div className='flex gap-6 my-10 justify-center'>
            <button className='group bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center font-semibold text-lg'>Explore Products</button>
            <button className='border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 px-10 py-4 rounded-2xl hover:border-blue-400 hover:text-blue-600 hover:bg-white hover:shadow-xl transition-all duration-300 font-semibold text-lg'>Learn More</button>
          </div>
          <div className="h-0.5 my-2 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>


          <div className='flex gap-22 justify-center my-10'>
            <div className='flex flex-col'>
              <span className='text-center text-4xl font-medium text-sky-600'>35+</span>
              <span>Pharmact Products</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-center text-4xl font-medium text-sky-600'>2</span>
              <span>Business Territories</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-center text-4xl font-medium text-sky-600'>100%</span>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>


        <div className="absolute top-78 right-36 w-28 h-28 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-25 animate-pulse shadow-lg"></div>
        <div className="absolute top-[720px] right-45 w-16 h-16 bg-gradient-to-r from-cyan-300 to-sky-400 rounded-full opacity-30 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-[650px] right-[780px] w-36 h-36 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-25 animate-pulse animation-delay-1000 shadow-lg"></div>


        <div ref={box} className='flex flex-col gap-10 bg-blue-50 shadow-blue-200 shadow-2xl h-85 p-3 my-26 rounded-2xl scale-120 rotate-3 md:w-[550px] md:mx-auto sm:w-[550px] sm:mx-auto'>

          <div className='flex gap-9'>

            <div className="bg-[#DAEDFE] h-18 p-2 rounded-2xl text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
            </div>

            <div className="my-3">
              <h5>Quality & Reliablitiy</h5>
              <p>Trusted by healthcare professionals</p>
            </div>

          </div>

          <div className='flex gap-9'>

            <div className="bg-[#DAEDFE] h-18 p-2 rounded-2xl text-violet-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
            </div>

            <div className="my-3">
              <h5>Patient-Centric</h5>
              <p>Focused on better health outcomes</p>
            </div>

          </div>

          <div className="bg-gradient-to-r from-blue-100 to-violet-100 p-4 rounded-3xl">
            <p className="scale-90">"Committed to delivering better health and happier society through <br /> innovate pharmaceutical solutions."</p>
          </div>
        </div>

      </div>

      <Services />
      <Credentials />

    </>
  )
}

export default App