import React from 'react'
import bg from '../assets/bgflip.jpg'
import play from '../assets/play_2.svg'
import star2 from '../assets/star2.svg'
const Overview = () => {
  return (
    <section className="w-screen h-full bg-[#D5FF40] flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center flex-col ">
                   <div className="flex items-center justify-center w-full h-full">
                           <div className="flex items-center w-full h-full justify-center p-1 sm:p-3 pb-0 sm:pb-0 relative">
                            <div className="flex items-center justify-center max-w-6xl p-2 pb-0 sm:p-4 sm:pb-0">
                            <div className="flex items-center max-w-6xl justify-center relative p-2 pb-0 xs:p-4 xs:pb-0 sm:p-6 sm:pb-0 mb-14 sm:mb-12 md:mb-8" >
                                <img src={bg} alt="bg" className="w-full h-full object-cover rounded-t-[48px] s:rounded-t-[56px] sm:rounded-t-[72px] md:rounded-t-[84px] lg:rounded-t-[112px]"/>
                                <img src={play} alt="play" className="motion-safe:animate-[spin_5s_ease-in-out_infinite]  h-16 w-16 s:h-20 s:w-20  sm:w-24 sm:h-24 lg:w-28 lg:h-28 absolute top-0 right-0"/>
                                </div>
                                </div>
                                <div className="bottom-0 absolute flex items-center justify-center w-full bg-black">
                           <div className="flex items-center justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d5ff40] font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2"/> BUILD YOUR IDEAS</h1></marquee></div>
                   </div>
                           </div>
                   </div>
                  
        </div>
      </div>
    </section>
  )
}

export default Overview