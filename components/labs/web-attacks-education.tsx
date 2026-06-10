'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Attack {
  id: string
  name: string
  category: string
  description: string
  impact: string
  example: string
  prevention: string[]
}

const attacks: Attack[] = [
  {
    id: 'xss',
    name: 'Cross-Site Scripting (XSS)',
    category: 'Injection',
    description: 'Injecting malicious scripts into web pages viewed by other users',
    impact: 'Session hijacking, data theft, malware distribution',
    example: '<img src=x onerror="alert(\'XSS\')">',
    prevention: [
      'Input validation and output encoding',
      'Content Security Policy (CSP)',
      'Use safe DOM methods',
      'Regular security updates'
    ]
  },
  {
    id: 'sqli',
    name: 'SQL Injection',
    category: 'Injection',
    description: 'Inserting SQL code into input fields to manipulate database queries',
    impact: 'Unauthorized data access, data modification, complete database compromise',
    example: "SELECT * FROM users WHERE id = '1 OR 1=1'",
    prevention: [
      'Parameterized queries',
      'Use ORM frameworks',
      'Input validation',
      'Principle of least privilege'
    ]
  },
  {
    id: 'csrf',
    name: 'Cross-Site Request Forgery (CSRF)',
    category: 'Session',
    description: 'Tricking authenticated users into performing unwanted actions',
    impact: 'Unauthorized transactions, account hijacking',
    example: '<img src="https://bank.com/transfer?to=attacker&amount=1000">',
    prevention: [
      'CSRF tokens',
      'SameSite cookie attribute',
      'Double-submit cookies',
      'Verify referer headers'
    ]
  },
  {
    id: 'rce',
    name: 'Remote Code Execution (RCE)',
    category: 'Execution',
    description: 'Executing arbitrary code on the server through input injection',
    impact: 'Complete server compromise, data breach, service disruption',
    example: 'eval($_GET[\'code\']); // executing PHP code directly',
    prevention: [
      'Never use eval() or similar functions',
      'Use safe APIs',
      'Sandboxing',
      'Regular patching'
    ]
  },
  {
    id: 'auth',
    name: 'Broken Authentication',
    category: 'Authentication',
    description: 'Flaws in login, session management, and password recovery',
    impact: 'Account takeover, unauthorized access',
    example: 'Weak passwords, session fixation, insecure password reset',
    prevention: [
      'Strong password requirements',
      'Multi-factor authentication',
      'Secure session management',
      'Rate limiting on login'
    ]
  },
  {
    id: 'lfi',
    name: 'Local File Inclusion (LFI)',
    category: 'Injection',
    description: 'Including and executing local files through user input',
    impact: 'Source code disclosure, configuration exposure, RCE',
    example: 'index.php?page=../../../../etc/passwd',
    prevention: [
      'Whitelist allowed files',
      'Input validation',
      'Disable remote file inclusion',
      'Use proper path handling'
    ]
  }
]

interface ExpandedState {
  [key: string]: boolean
}

const WebAttacksEducation = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const categories = ['All', ...new Set(attacks.map(a => a.category))]
  const filteredAttacks = selectedCategory === 'All'
    ? attacks
    : attacks.filter(a => a.category === selectedCategory)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">Web Attacks Education</h3>
        <p className="text-foreground/70 text-sm">Comprehensive guide to common web vulnerabilities</p>
      </div>

      {/* Category Filter */}
      <div>
        <label className="text-sm font-semibold mb-3 block">Filter by Category:</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground border border-primary'
                  : 'bg-background border border-border hover:border-primary/50 text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Attacks List */}
      <div className="space-y-3">
        {filteredAttacks.map((attack) => (
          <div
            key={attack.id}
            className="rounded-lg border border-border bg-background hover:border-primary/50 transition-all overflow-hidden"
          >
            <button
              onClick={() => toggleExpand(attack.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-card/50 transition-colors"
            >
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-foreground">{attack.name}</h4>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {attack.category}
                  </span>
                </div>
                <p className="text-sm text-foreground/60">{attack.description}</p>
              </div>
              {expanded[attack.id] ? (
                <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
              )}
            </button>

            {expanded[attack.id] && (
              <div className="px-4 py-4 border-t border-border bg-card/30 space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Impact</h5>
                  <p className="text-sm text-foreground/70">{attack.impact}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-2">Example</h5>
                  <code className="block bg-background rounded p-3 text-xs font-mono text-foreground/80 overflow-x-auto">
                    {attack.example}
                  </code>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-2">Prevention Strategies</h5>
                  <ul className="space-y-2">
                    {attack.prevention.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* OWASP Reference */}
      <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
        <h4 className="font-semibold text-primary mb-3">OWASP Top 10 Reference</h4>
        <p className="text-sm text-foreground/70 mb-3">
          These attacks are based on the OWASP Top 10 - the most critical web application security risks. Regular security training and code reviews can help prevent these vulnerabilities.
        </p>
        <div className="text-xs text-foreground/60">
          Learn more at <a href="https://owasp.org/Top10/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">owasp.org/Top10</a>
        </div>
      </div>
    </div>
  )
}

export default WebAttacksEducation
