'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">{'<K.H. Harsh />'}</h3>
            <p className="text-sm text-foreground/60">
              Connect with me on LinkedIn, follow my projects on GitHub, or email me at{' '}
              <a href="mailto:harsh06pb@gmail.com" className="text-primary hover:underline">harsh06pb@gmail.com</a>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Achievements', href: '#achievements' },
                { name: 'Profiles', href: '#platforms' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors block"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Harsh-KH-6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/khharsh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:harsh06pb@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © {currentYear} K.H. Harsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
