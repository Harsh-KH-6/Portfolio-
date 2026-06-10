'use client'

import { portfolio } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold">{portfolio.achievements.title}</h2>
        </div>

        <div className="space-y-4">
          {portfolio.achievements.items.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-base sm:text-lg text-foreground/90">
                <span className="font-semibold text-foreground mr-2">{index + 1}.</span>
                {item.organization} :{' '}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                    {item.recognition}
                  </a>
                ) : (
                  <span className="font-medium text-primary">{item.recognition}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements