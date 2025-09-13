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

    tl.to(box.current, {
      rotate: -3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "linear"
    })

    gsap.fromTo(
      box2.current,
      { y: -300, opacity: 0 },   // starting point
      { y: 0, opacity: 1, duration: 2, ease: "linear" } // ending point
    )
  }, [])

  return (
    <>
      <svg className="absolute top-[-80px] left-[-90px]" width="569" height="561" viewBox="0 0 569 561" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_df_1_2)">
          <ellipse cx="284.5" cy="280.5" rx="98.5" ry="94.5" fill="url(#paint0_linear_1_2)" />
        </g>
        <defs>
          <filter id="filter0_df_1_2" x="0" y="0" width="569" height="561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="48" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_2" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="37" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
            <feGaussianBlur stdDeviation="93" result="effect2_foregroundBlur_1_2" />
          </filter>
          <linearGradient id="paint0_linear_1_2" x1="186" y1="270" x2="365" y2="341" gradientUnits="userSpaceOnUse">
            <stop stop-color="#99815A" />
            <stop offset="1" stop-color="#FFB676" />
          </linearGradient>
        </defs>
      </svg>

      <div ref={box2} className='bg-[#F8F3DE] my-6 w-70 rounded-4xl mx-auto flex justify-center border-2 border-[#9F8310]'>
        <div className='my-2 text-[#FF2100] bg-[#F8F3DE]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
        </div>
        <h2 className='text-center p-2 text-[#FF2100]'>Trusted HealthCare Solutions</h2>
      </div>

      <div className='flex flex-col lg:flex-row justify-center my-26 gap-y-10 bg-[#F8F3DE]'>
        <div ref={hero1} className="lg:mx-42">

          <svg className="absolute my-60" width="654" height="642" viewBox="0 0 654 642" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_5_2)">
              <ellipse cx="327" cy="321" rx="128" ry="122" fill="#FFB473" />
            </g>
            <defs>
              <filter id="filter0_f_5_2" x="0" y="0" width="654" height="642" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="99.5" result="effect1_foregroundBlur_5_2" />
              </filter>
            </defs>
          </svg>


          <h1 className='text-6xl sm:text-4xl md:text-6xl lg:text-8xl font-medium text-center'>
            <span className="bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
              Life · Health ·
            </span>

            <br />
            <span className="bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
              Happiness
            </span>

          </h1>
          <p className="my-8 mx-5 text-xl text-slate-600 leading-relaxed font-medium md:text-center sm:text-center">
            BIOCYTE Organics Private Limited (BOPL) is one of India&apos;s
            <br className="hidden md:block" />
            largest mid-sized pharmaceutical companies, providing
            <br className="hidden md:block" />
            innovative healthcare solutions and affordable treatments for
            <br className="hidden md:block" />
            sleep disorders, respiratory ailments, and critical care.
          </p>

          <div className='flex flex-col md:flex-row gap-6 my-10 justify-center'>
            <button className='w-70 mx-auto group bg-[#9F8310] text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center font-semibold text-lg'>Explore Products</button>

            <button className='w-70 mx-auto group bg-[#F8F3DE] text-[#FF2100] border-[#9F8310] border-2 px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center font-semibold text-lg'>Learn More</button>
          </div>
          <div className="h-0.5 my-2 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>


          <div className='flex gap-14 justify-center my-10'>
            <div className='flex flex-col'>
              <span className='text-center text-4xl font-medium bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent'>35+</span>
              <span className="text-[#9F8310]">Pharmact <br />Products</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-center text-4xl font-medium bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent'>2</span>
              <span className="text-[#9F8310]">Business <br />Territories</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-center text-4xl font-medium bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent'>100%</span>
              <span className="text-[#9F8310]">Quality <br />Assured</span>
            </div>
          </div>
        </div>


        <div className="absolute top-78 right-25 w-28 h-28 bg-gradient-to-r from-orange-100 to-orange-300 rounded-full opacity-25 animate-pulse shadow-lg"></div>
        <div className="absolute top-[720px] right-25 w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-300 rounded-full opacity-30 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-[680px] right-[720px] w-36 h-36 bg-gradient-to-r from-orange-100 to-orange-300 rounded-full opacity-25 animate-pulse animation-delay-1000 shadow-lg"></div>


        <div ref={box} className='flex flex-col gap-10 bg-[#F8F3DE] shadow-[#ecdbdb] shadow-2xl h-85 p-3 rounded-2xl scale-85 md:scale-120 md:my-26 rotate-3 md:w-[550px]  sm:w-[550px] sm:mx-auto'>

          <div className='flex gap-9'>

            <div className="bg-[#F8F5DE] border-2 border-[#9F8310] h-18 p-2 rounded-2xl text-[#FF0000]">
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
            </div>

            <div className="my-3">
              <h5 className="text-[#A28808] font-bold">Quality & Reliablitiy</h5>
              <p className="text-[#A28808] font-bold">Trusted by healthcare professionals</p>
            </div>

          </div>

          <div className='flex gap-9'>

            <div className="bg-[#F8F5DE] border-2 border-[#9F8310] h-18 p-2 rounded-2xl text-[#FF0000]">
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
            </div>

            <div className="my-3">
              <h5 className="text-[#A28808] font-bold">Patient-Centric</h5>
              <p className="text-[#A28808]">Focused on better health outcomes</p>
            </div>

          </div>

          <div className="bg-[#F8F5DE] p-4 rounded-3xl border-2 border-[#9F8310]">
            <p className="scale-90 text-[#A28808]"><span className="text-[#9F8310] font-bold text-xl">"</span>Committed to delivering better health and happier society through <br /> innovate pharmaceutical solutions.<span className="text-[#9F8310] font-bold text-xl">"</span></p>
          </div>
        </div>

      </div>

      <Services />
      <Credentials />

    </>
  )
}

export default App