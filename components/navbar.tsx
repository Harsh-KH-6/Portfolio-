'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const originalText = '<K.H. Harsh />'
  const [displayText, setDisplayText] = useState(originalText)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Profiles', href: '#platforms' }
  ]

  const handleThemeToggle = () => {
    // Scroll to top like a normal logo click
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    if (!mounted) return

    // Change theme
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

    // Trigger decrypting animation
    if (isAnimating) return
    setIsAnimating(true)
    
    const CHARACTERS = '0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
    let iteration = 0
    
    const interval = setInterval(() => {
      setDisplayText(
        originalText.split('').map((char, index) => {
          if (index < iteration) return originalText[index]
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
        }).join('')
      )
      
      if (iteration >= originalText.length) {
        clearInterval(interval)
        setIsAnimating(false)
        setDisplayText(originalText)
      }
      
      iteration += 1 / 3
    }, 30)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={handleThemeToggle}
            title="Toggle Theme"
            className={`text-xl font-bold transition-colors duration-300 ${
              isAnimating ? 'text-accent' : 'text-primary hover:text-accent'
            }`}
          >
            {displayText}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
