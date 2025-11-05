'use client'
import React from 'react'
import confetti from 'canvas-confetti'
import { div } from 'three/tsl'

export default function HireMe() {
  const handleClick = () => {
    // launch confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#d1d1d1', '#c0c0c0', '#b8f2ff'],
    })
  }

  return (
    <div className='flex justify-center items-center bg-black py-30 pb-40'>
        <button
        onClick={handleClick}
        className="flex flex-row items-center justify-center gap-2 relative overflow-hidden rounded-full px-20 py-5 text-black font-semibold shadow-md transition-all duration-300 
                    hover:scale-105 hover:shadow-lg active:scale-95 bg-[#D7F3F5]"
        >
        <p className='text-xl'>Let's make it</p><p className='text-4xl font-great-vibes'>official</p>
        {/* metallic shine overlay */}
        <span className="absolute font-bold inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 animate-shimmer pointer-events-none" />
        </button>
    </div>
  )
}
