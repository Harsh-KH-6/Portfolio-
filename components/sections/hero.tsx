'use client'

import { useEffect, useState } from 'react'
import { portfolio } from '@/lib/data'
import { Download } from 'lucide-react'

const CHARACTERS = '0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState(text)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timeout

    timeout = setTimeout(() => {
      setIsVisible(true)
      let iteration = 0
      
      interval = setInterval(() => {
        setDisplayText(() => 
          text.split('').map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
          }).join('')
        )
        
        if (iteration >= text.length) {
          clearInterval(interval)
        }
        
        iteration += 1 / 3
      }, 30)
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, delay])

  return <span className={isVisible ? 'opacity-100' : 'opacity-0'}>{displayText}</span>
}

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
        {/* Left Side: Content */}
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {portfolio.hero.title}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
              {portfolio.hero.description}
            </p>
            {portfolio.hero.resumeLink && (
              <div className="pt-4">
                <a
                  href={portfolio.hero.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
                >
                  <Download className="w-5 h-5" />
                  Get my Resume
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Terminal Graphic */}
        <div className="hidden lg:flex w-full justify-center">
          <div className="w-full max-w-2xl rounded-xl bg-[#0a0a0a] border border-border shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center px-4 py-3 bg-card border-b border-border/50 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-neutral-500 font-mono">researcher@harsh:~</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-4 flex flex-col items-start min-h-[300px]">
              <div className="flex gap-2 w-full">
                <span className="text-accent">❯</span>
                <span className="text-primary"><ScrambleText text="whoami" delay={300} /></span>
              </div>
              <div className="text-neutral-400 ml-4 whitespace-nowrap">
                <ScrambleText text="Security Researcher | Project Intern @ NIC | Final-Year IT Student" delay={800} />
              </div>
              <div className="flex gap-2 w-full mt-4">
                <span className="text-accent">❯</span>
                <span className="text-primary"><ScrambleText text="stats --ls" delay={1500} /></span>
              </div>
              <div className="text-neutral-400 ml-4 space-y-1 mt-2">
                <div><ScrambleText text="[+] Valid Security Reports: 15+" delay={2500} /></div>
                <div><ScrambleText text="[+] Hall of Fame Recognitions: 5+" delay={2700} /></div>
                <div><ScrambleText text="[+] Multiple Swags & Recognition Rewards" delay={2900} /></div>
              </div>
              <div className="flex gap-2 w-full mt-4">
                <span className="text-accent animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
