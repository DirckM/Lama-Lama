import React from 'react'
import { BadgeCheck } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { div } from 'three/tsl';

// This will be a component containing the project that I am most proud of and the details of it

function ProudProject() {

    const projectFeatures = [
        "Selling tickets for events",
        "Dashboard for managing events and tickets",
        "Payment processing",
        "User authentication",
    ]

    const collaborationFeatures = [
        "Collaboration with other developers",
        "Version control",
        "Project management",
        "Task management",
    ]

    const isMobile = useMediaQuery({maxWidth: 768});

    useGSAP(() => {

        const start = isMobile ? 'top top' : 'top top';
        
        const maskedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#proud-project',
                start: start,
                end: 'bottom top',
                scrub: 1.5,
                pin: true,
                pinSpacing: true,
            }
        })
        

        maskedTimeline.to('.will-fade', {
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.inOut',
        })
        maskedTimeline.to('.masked-img', {
            maskPosition: 'center',
            scale: 1.5,
            maskSize: '600%',
            duration: 1.5,
            ease: 'power2.inOut',
        })
        maskedTimeline.to('.hidden-content', {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            delay: 1.5,
            stagger: 0.2,
        })
    }, [])

  return (
    <div id='proud-project' className='flex-center flex-col min-h-dvh'>
        <div className='bg-black w-full h-full py-5 gap-4 md:gap-0 flex flex-col justify-center items-center px-10'>
            <div className='flex flex-col justify-center items-center will-fade'>
                <h2 className='text-[#D7F3F5] text-6xl font-bold'>Proud</h2>
                <h2 className='text-[#D7F3F5] text-6xl font-great-vibes'>Project</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-center items-center h-full w-full'>
                <div className='will-fade flex flex-col justify-center items-center md:items-start gap-6 md:w-auto'>
                    <h3 className='text-[#D7F3F5] text-2xl font-bold'>Features</h3>
                    <ul className='flex flex-col gap-2'>
                        {projectFeatures.map((feature, index) => (
                            <li key={index} className='flex flex-row items-center gap-2'>
                                <BadgeCheck className='text-gray-400 w-4 h-4' />
                                <p className='text-gray-400 text-sm'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='relative md:w-[50vw] w-full h-[30vh] md:h-[60vh] rounded-4xl overflow-hidden'>
                    <img src="/images/teckit.png" 
                        alt="teckit" 
                        className='masked-img size-full object-contain' />
                </div>
                <div className='will-fade flex flex-col justify-start items-center md:items-start gap-6 ma  x-w-[15%]'>
                    <h3 className='text-[#D7F3F5] text-2xl font-bold'>Experiences</h3>
                    <ul className='flex flex-col gap-2'>
                        {collaborationFeatures.map((experience, index) => (
                            <li key={index} className='flex flex-row items-center gap-2'>
                                <BadgeCheck className='text-gray-400 w-4 h-4' />
                                <p className='text-gray-400 text-sm'>{experience}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='hidden-content flex flex-col justify-center items-center gap-2 opacity-0 -py-10 md:p-20'>
                <h3 className='text-[#D7F3F5] text-2xl font-bold'>Teckit</h3>
                <p className='text-gray-400 w-full text-sm w-full md:max-w-[50%] text-center'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>

  )
}

export default ProudProject;

