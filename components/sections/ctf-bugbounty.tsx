'use client'

import { portfolio } from '@/lib/data'
import { Bug, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const CTFAndBugBounty = () => {
  const { ref: ctfRef, isVisible: ctfVisible } = useScrollAnimation()
  const { ref: bbRef, isVisible: bbVisible } = useScrollAnimation()

  return (
    <>
      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto" ref={ctfRef}>
          <div className={`mb-16 transition-all duration-700 ${ctfVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold">{portfolio.platforms.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.platforms.items.map((platform, index) => (
              <a
                key={platform.id}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-lg border border-border bg-background hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-700 ${ctfVisible ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col justify-between h-full`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{platform.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  {platform.badge && (
                    <div className="mb-6 mt-2 flex justify-center bg-card rounded-lg p-2 border border-border/50 shadow-inner">
                      <img src={platform.badge} alt={`${platform.name} Badge`} className="max-w-full h-auto object-contain" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all mt-auto">
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Bounties Section */}
      {portfolio.bugBounties && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto" ref={bbRef}>
            <div className={`flex items-center gap-3 mb-16 transition-all duration-700 ${bbVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Bug className="w-8 h-8 text-primary" />
              <h2 className="text-4xl sm:text-5xl font-bold">{portfolio.bugBounties.title}</h2>
            </div>

            <div className="space-y-4">
              {portfolio.bugBounties.items.map((bounty, index) => (
                <div
                  key={bounty.id}
                  className={`p-6 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-700 ${bbVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{bounty.company}</h3>
                      <p className="text-foreground/60 mb-2">{bounty.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          bounty.severity === 'High'
                            ? 'bg-destructive/20 text-destructive border border-destructive/30'
                            : 'bg-accent/20 text-accent border border-accent/30'
                      }`}
                      >
                        {bounty.severity}
                      </span>
                      <span className="text-xs text-foreground/50">{bounty.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CTFAndBugBounty
