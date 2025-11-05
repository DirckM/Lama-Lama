'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'


// This component is the component that will be used to display my motivation and goals using GSAP
function MotivationAndGoals() {

    gsap.registerPlugin(ScrollTrigger)

    //used to reference the scroll container
    const scrollRef = useRef<HTMLDivElement>(null!)

    // Here we will make a GSAP animation to animate the icons and the text
    useGSAP(() => {
        // Animate icon one from left - appears FIRST (earliest)
        gsap.from('#about_icon_one', {
            x: -200,
            opacity: 0,
            rotation: -45,
            scrollTrigger: {
                trigger: '#about_icon_one',
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
            }
        })

        // Animate icon two from right - appears SECOND
        gsap.from('#about_icon_two', {
            x: 200,
            opacity: 0,
            rotation: 45,
            scrollTrigger: {
                trigger: '#about_icon_two',
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
            }
        })

        // Animate icon three from left - appears THIRD (latest)
        gsap.from('#about_icon_three', {
            x: -200,
            opacity: 0,
            rotation: -45,
            scrollTrigger: {
                trigger: '#about_icon_three',
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
            }
        })

        // Animate "Why Lama Lama" text from right
        gsap.from('#text_why', {
            x: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#text_why',
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
            }
        })

        // Animate "Proud Work" text from left
        gsap.from('#text_proud', {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#text_proud',
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
            }
        })

        // Animate "Future Project" text from right
        gsap.from('#text_future', {
            x: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#text_future',
                start: 'top bottom',
                end: 'center center',
                scrub: 1,
            }
        })
    })
  return (
    <section ref={scrollRef} id='about' className='relative h-[150vh] overflow-hidden z-20'>
        {/* SVG Icons */}
        <img src="/images/icon_one.svg" alt="icon_one" className='absolute top-5 left-14 sm:left-20 md:left-24 lg:left-40 w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 lg:w-35 lg:h-35 rotate-20' id='about_icon_one'/>
        <img src="/images/icon_two.svg" alt="icon_two" className='absolute top-85 right-14 sm:right-20 md:right-24 lg:right-40 w-30 h-30 sm:w-35 sm:h-35 md:w-40 md:h-40 lg:w-45 lg:h-45 -rotate-20'  id='about_icon_two'/>
        <img src="/images/icon_three.svg" alt="icon_three" className='absolute top-155 left-14 sm:left-20 md:left-24 lg:left-40  rotate-20 w-25 h-25 sm:w-30 sm:h-30 md:w-40 md:h-40 lg:w-50 lg:h-50' id='about_icon_three'/>
        
        {/* Text sections positioned between icons with center clear for crown */}
        
        {/* "Why Lama Lama" - Right side, between icon 1 and icon 2 */}
        <div id='text_why' className='absolute top-0 right-14 sm:right-20 md:right-24 lg:right-40 max-w-[35%] sm:max-w-[25%]'>
            <h2 className='text-[#D7F3F5] text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Why Lama Lama</h2>
            <p className='text-gray-400 text-sm sm:text-base md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
        </div>

        {/* "Proud Work" - Left side, between icon 1 and icon 3 */}
        <div id='text_proud' className='absolute top-80 left-14 sm:left-20 md:left-24 lg:left-40 max-w-[35%] sm:max-w-[25%]'>
            <h2 className='text-[#D7F3F5] text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Proud Work</h2>
            <p className='text-gray-400 text-sm sm:text-base md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        </div>

        {/* "Future Project" - Right side, below icon 2 */}
        <div id='text_future' className='absolute top-160 right-14 sm:right-20 md:right-24 lg:right-40 max-w-[35%] sm:max-w-[25%]'>
            <h2 className='text-[#D7F3F5] text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Future Project</h2>
            <p className='text-gray-400 text-sm sm:text-base md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
        </div>
    </section>
  )
}

export default MotivationAndGoals