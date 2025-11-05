'use client'
import Scene from '@/components/Scene'
import MotivationAndGoals from '@/components/MotivationAndGoals'
import ProudProject from '@/components/ProudProject'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FutureProject from '@/components/FutureProject'



export default function Page() {
  
  return (
    <main className='relative h-screen'>
      {/* This Scene is the hero of the page and diplays the logo together with the turning 3D model */}
      <div id='scene' className='fixed inset-0 z-0 h-[100vh]'>
        <Scene />
      </div>
      {/* Content scrolls over it */}
      <section className="relative z-10 h-[100vh] bg-pink flex items-center justify-center">
      </section>
      {/* Then we have a section that displays my motivation and my goals using GSAP */}
      <MotivationAndGoals />
      <div>
        <ProudProject />
      </div>
      <div>
        <FutureProject />
      </div>
    </main>
  )
}

