'use client'

import { portfolio } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const About = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <div className="text-lg text-foreground/70 max-w-3xl leading-relaxed text-justify space-y-4">
            {portfolio.about.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-8">Experience</h3>
          {portfolio.experience.items.length === 0 ? (
            <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">Experience details coming soon.</p>
          ) : (
            portfolio.experience.items.map((item, index) => (
              <div key={item.id} className={`flex gap-6 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {index < portfolio.experience.items.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>

                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary font-bold">{item.duration}</span>
                  </div>
                  <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4 mb-4">
                    {item.logo && (
                      <div className="flex-shrink-0 bg-foreground/5 p-2 rounded-lg border border-border">
                        <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 object-contain" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.role}</h4>
                      <p className="text-lg font-medium text-foreground/80">{item.company}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-foreground/60 flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default About
