'use client'

import { portfolio } from '@/lib/data'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-4xl sm:text-5xl font-bold mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>{portfolio.projects.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.projects.items.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className={`group p-6 rounded-lg border border-border bg-background hover:border-primary/50 hover:bg-card transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
