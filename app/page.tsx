'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border z-[2000]">
        <div className="lg:max-w-6xl mx-auto px-4 sm:px-6  py-4 flex items-center justify-between">
          {/* Logo */}
         
            <div className="">
              <Image 
              width={100}
              height={100}
              alt='logo'
              className='h-20 w-full'
              src='/assets/logo.png'/>
          </div>

          {/* Nav Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-accent decoration-[4px] decoration-primary font-bold text-[20px] hover:underline underline-offset-8 transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-accent decoration-[4px] decoration-primary font-bold text-[20px] hover:underline underline-offset-8 transition-colors">
              About Us
            </a>
            {/* <div className="relative group text-foreground hover:text-accent decoration-[4px] decoration-primary font-bold text-[20px] hover:underline underline-offset-8 transition-colors">
              <button className="flex items-center gap-x-2">
                Other Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div> */}
            <a href="#" className="text-foreground hover:text-accent decoration-[4px] decoration-primary font-bold text-[20px] hover:underline underline-offset-8 transition-colors">
              FAQ
            </a>
            <a href="#" className="text-foreground hover:text-accent decoration-[4px] decoration-primary font-bold text-[20px] hover:underline underline-offset-8 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-bold px-12 py-6 hidden md:flex  leading-[1.2] capitalize md:text-lg">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative circles background */}
          <div className="absolute md:top-20 top-5 md:left-10 left-0 md:w-32 md:h-32 w-6 h-6 opacity-50  animate-x-subtle" >
          <img className='fill-inherit' src={'/assets/frame-1.svg'}/>
          </div>
          <div className="absolute top-8 translate-x-[45vw] -right-12   md:right-0 md:w-32 md:h-32 opacity-50 w-6 h-6 animate-mid-subtle" >
          <img className='fill-inherit' src={'/assets/frame-2.svg'}/>
          </div>
          <div className="absolute md:top-20 top-5 md:right-12 right-0 md:w-40 md:h-40 w-10 h-10 opacity-40 animate-x-subtle" >
          <img className='fill-inherit' src={'/assets/frame-4.svg'}/>
          
          </div>

        <div className="w-full mx-auto md:p-12 flex flex-col items-center text-center">
          {/* Headline */}  
          <div className="md:max-w-6xl space-y-4 mb-2">
            <h1 className="text-2xl md:text-6xl font-bold text-primary text-balance">
              A Scalable{' '}
              <span className="text-primary"><span className='text-accent'>Wellness Solution</span> That</span>
            </h1>
            <h2 className="text-2xl md:text-6xl font-bold text-primary text-balance">
              Drives Revenue
            </h2>
          </div>

          {/* Description */}
          <p className="w-full text-lg text-muted-foreground leading-[1.6] text-balance font-bold">
          <span className='text-primary'>carepath</span><span className='text-accent'>go</span> in partnership with DOSEVANA is a done-for-you medical partnership that pays off from Patient #1. We provide the HIPAA-compliant tech, 50-state physician network, and Semaglutide direct-to-patient fulfillment. <br/> You focus on attracting clients; we handle the logistics.
          </p>

          {/* Hero Image with bounce animation */}
          <div className="relative w-full flex flex-col aspect-video items-center justify-center md:-mt-20">
            <div className="animate-bounce-subtle md:block hidden">
            <img src="assets/banner.png" alt="Home Banner"/>
            </div>
            <Button className="animate-bounce-once bg-primary hover:bg-accent/90 text-white rounded-full z-[1000] px-16 py-8 text-lg">
            REQUEST A DEMO
          </Button>
          </div>

          {/* CTA Button */}
         
        </div>
      </section>

      {/* Trusted Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-primary/60 p-6 overflow-hidden lg:-mt-40 mb-6 py-12">
        {/* Decorative shapes */}
        
        <img className='absolute top-5 md:left-0 -left-10 w-20 h-20 animate-x-subtle' src={'/assets/frame-6.svg'}/>
        <img className='absolute md:-top-24 md:-right-12 -right-2 -top-1 md:w-64 w-20  -translate-x-1/2 -translate-y-1/2 animate-x-subtle' src={'/assets/frame-8.svg'}/>
        <img className='absolute bottom-0 -right-6 w-20 h-20  -translate-y-1/2' src={'/assets/frame-6.svg'}/>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-balance mb-3">
            Trusted by Top Wellness <br/>
            Organizations Nationwide
       </h2>
          <p  className='text-white mb-12'>Powering the Next Generation of Wellness Clinics and Fitness Centers</p>
          <div className="md:flex md:justify-center md:gap-x-32 md:flex-wrap gap-y-6 grid grid-cols-2 gap-x-4">
            <img src={'/assets/logos/ufc.png'} className='w-40'/>
            <img src={'/assets/logos/md360.svg'} className='w-40'/>
            <img src={'/assets/logos/rizz.svg'}className='w-40'/>
            <img src={'/assets/logos/ufc-gym.svg'}className='w-40'/>
            <img src={'/assets/logos/nexgen.svg'}className='w-40'/>
            <img src={'/assets/logos/docuspa.svg'}className='w-40'/>
          </div>
        </div>
       
      </section>

      {/* Chat Button */}
      <div className="fixed bottom-2 right-1 bg-primary hover:bg-primary/90 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer transition-all">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
    </div>
  )
}
