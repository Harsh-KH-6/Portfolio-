'use client'

import { useState } from 'react'
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react'

const XSSPlayground = () => {
  const [userInput, setUserInput] = useState('')
  const [showVulnerable, setShowVulnerable] = useState(false)
  const [showSafe, setShowSafe] = useState(false)
  const [xssDetected, setXssDetected] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUserInput(value)
    
    // Simple XSS pattern detection
    const xssPatterns = /<|>|script|javascript|onerror|onload|onclick|eval/i
    setXssDetected(xssPatterns.test(value))
  }

  const escapeHtml = (text: string) => {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }

  const examples = [
    { label: 'Simple Alert', payload: '<script>alert("XSS")</script>' },
    { label: 'Image Tag', payload: '<img src=x onerror="alert(\'XSS\')">' },
    { label: 'Event Handler', payload: '<body onload="alert(\'XSS\')">' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">XSS Playground</h3>
        <p className="text-foreground/70 text-sm">Learn how Cross-Site Scripting (XSS) vulnerabilities work</p>
      </div>

      {/* Example Payloads */}
      <div>
        <label className="text-sm font-semibold mb-3 block">Quick Examples</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {examples.map((example) => (
            <button
              key={example.label}
              onClick={() => {
                setUserInput(example.payload)
                setXssDetected(true)
              }}
              className="p-3 rounded-lg border border-border bg-background hover:border-primary/50 text-left text-sm transition-all hover:bg-card"
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div>
        <label className="text-sm font-semibold mb-2 block">
          Try entering a payload:
        </label>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter XSS payload here..."
          className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {xssDetected && (
          <div className="mt-2 flex items-center gap-2 text-destructive text-sm">
            <AlertTriangle className="w-4 h-4" />
            Potential XSS pattern detected!
          </div>
        )}
      </div>

      {/* Vulnerable vs Safe Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vulnerable Output */}
        <div>
          <button
            onClick={() => setShowVulnerable(!showVulnerable)}
            className="w-full text-left mb-3 p-3 rounded-lg border border-destructive/30 bg-destructive/5 hover:bg-destructive/10 transition-all"
          >
            <div className="flex items-center gap-2 font-semibold text-destructive">
              <AlertCircle className="w-5 h-5" />
              Vulnerable Output (Dangerous!)
            </div>
          </button>

          {showVulnerable && (
            <div className="p-4 rounded-lg border border-border bg-background">
              <p className="text-xs text-foreground/60 mb-3">
                This shows how unescaped input is rendered - scripts would execute:
              </p>
              <div
                className="p-3 rounded border border-destructive/30 bg-background/50 text-foreground text-sm break-words"
                dangerouslySetInnerHTML={{ __html: userInput || '<em>Output appears here...</em>' }}
              />
            </div>
          )}
        </div>

        {/* Safe Output */}
        <div>
          <button
            onClick={() => setShowSafe(!showSafe)}
            className="w-full text-left mb-3 p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all"
          >
            <div className="flex items-center gap-2 font-semibold text-primary">
              <CheckCircle className="w-5 h-5" />
              Safe Output (HTML Escaped)
            </div>
          </button>

          {showSafe && (
            <div className="p-4 rounded-lg border border-border bg-background">
              <p className="text-xs text-foreground/60 mb-3">
                This is safely escaped - scripts cannot execute:
              </p>
              <div className="p-3 rounded border border-primary/30 bg-background/50 text-foreground text-sm break-all font-mono text-xs">
                {escapeHtml(userInput) || '<em>Output appears here...</em>'}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
        <h4 className="font-semibold text-primary mb-2">Prevention:</h4>
        <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
          <li>Always escape user input before rendering</li>
          <li>Use Content Security Policy (CSP) headers</li>
          <li>Use templating engines with auto-escaping</li>
          <li>Validate and sanitize all inputs</li>
        </ul>
      </div>
    </div>
  )
}

export default XSSPlayground
