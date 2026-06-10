'use client'

import { portfolio } from '@/lib/data'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-4xl sm:text-5xl font-bold mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.skills.categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
