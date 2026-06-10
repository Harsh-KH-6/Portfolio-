'use client'

import { portfolio } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'

const Writeups = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-4xl sm:text-5xl font-bold mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>{portfolio.writeups.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.writeups.items.map((writeup, index) => (
            <Link
              key={writeup.id}
              href={writeup.link ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex-1">
                    {writeup.title}
                  </h3>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {writeup.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {writeup.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
            <div className="flex items-center justify-end text-xs text-foreground/50">
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {portfolio.writeups.githubLink && (
          <div className={`mt-12 flex justify-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: `${portfolio.writeups.items.length * 100}ms` }}>
            <Link href={portfolio.writeups.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group gap-2 border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                Show More on GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Writeups
