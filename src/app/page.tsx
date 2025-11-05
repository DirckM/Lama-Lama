'use client'
import Scene from '@/components/Scene'
import MotivationAndGoals from '@/components/MotivationAndGoals'
import ProudProject from '@/components/ProudProject'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FutureProject from '@/components/FutureProject'
import HireMe from '@/components/HireMe'



export default function Page() {
  
  return (
    <main className='relative h-screen w-full'>
      {/* This Scene is the hero of the page and diplays the logo together with the turning 3D model */}
      <div id='scene' className='relative z-0 h-[250vh]'>
        <Scene />
        <div className='absolute top-[100vh] z-10 h-[150vh] w-full'>
          <MotivationAndGoals />
        </div>
      </div>
      {/* Then we have a section that displays my motivation and my goals using GSAP */}
      <div>
        <ProudProject />
      </div>
      <div>
        <FutureProject />
      </div>
      <div>
        <HireMe />
      </div>
    </main>
  )
}

