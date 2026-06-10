'use client'

import { portfolio } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="certifications" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Certifications */}
        <div>
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold">{portfolio.certifications.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.certifications.items.map((cert, index) => (
              <div
                key={cert.id}
                className={`p-4 rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-foreground/60">{cert.issuer}</p>
                  </div>
                  {cert.date && (
                    <span className="text-xs text-foreground/50">{cert.date}</span>
                  )}
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-primary text-sm font-medium hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}

export default Certifications
