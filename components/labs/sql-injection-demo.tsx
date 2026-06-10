'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

const SQLInjectionDemo = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [vulnerable, setVulnerable] = useState(false)
  const [injectionDetected, setInjectionDetected] = useState(false)

  // Mock database
  const mockUsers = [
    { id: 1, username: 'admin', password: 'secret123' },
    { id: 2, username: 'user', password: 'password' }
  ]

  const handleVulnerableLogin = () => {
    // Simulating vulnerable query: SELECT * FROM users WHERE username = 'input' AND password = 'input'
    const sqlPattern = /['"];?\s*(or|and|union|select|drop|insert|update|delete|--|\/\*)/i
    const hasInjection = sqlPattern.test(username) || sqlPattern.test(password)
    
    setInjectionDetected(hasInjection)
    
    if (hasInjection) {
      setVulnerable(true)
    } else {
      // Simple password check
      const user = mockUsers.find(u => u.username === username && u.password === password)
      if (user) {
        setVulnerable(true)
      }
    }
  }

  const handleSafeLogin = () => {
    // Using parameterized query (safe)
    const user = mockUsers.find(u => u.username === username && u.password === password)
    if (user) {
      setVulnerable(false)
      setInjectionDetected(false)
      alert('Login successful with parameterized query!')
    }
  }

  const sqlExamples = [
    { label: 'Bypass Login', payload: "admin' --" },
    { label: 'OR condition', payload: "' OR '1'='1" },
    { label: 'Union-based', payload: "' UNION SELECT * FROM users --" }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">SQL Injection Demo</h3>
        <p className="text-foreground/70 text-sm">See how SQL injection attacks compromise databases</p>
      </div>

      {/* Mock Login Form */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold mb-2 block">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div>
          <label className="text-sm font-semibold mb-2 block">Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {injectionDetected && (
          <div className="p-3 rounded-lg border border-destructive/30 bg-destructive/5 flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="w-4 h-4" />
            SQL Injection pattern detected!
          </div>
        )}
      </div>

      {/* Quick Payloads */}
      <div>
        <label className="text-sm font-semibold mb-3 block">Try injection payloads:</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {sqlExamples.map((example) => (
            <button
              key={example.label}
              onClick={() => setUsername(example.payload)}
              className="p-3 rounded-lg border border-border bg-background hover:border-primary/50 text-left text-sm transition-all hover:bg-card"
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={handleVulnerableLogin}
          className="p-4 rounded-lg border border-destructive/30 bg-destructive/5 hover:bg-destructive/10 text-left transition-all"
        >
          <div className="font-semibold text-destructive mb-2">Test Vulnerable Query</div>
          <p className="text-xs text-foreground/70">SELECT * FROM users WHERE username = '{username}' AND password = '{password}'</p>
        </button>

        <button
          onClick={handleSafeLogin}
          className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 text-left transition-all"
        >
          <div className="font-semibold text-primary mb-2">Test Safe Query (Parameterized)</div>
          <p className="text-xs text-foreground/70">SELECT * FROM users WHERE username = ? AND password = ?</p>
        </button>
      </div>

      {/* How it works */}
      <div className="p-4 rounded-lg border border-border bg-card/50">
        <h4 className="font-semibold mb-3">How SQL Injection Works:</h4>
        <div className="space-y-3 text-sm text-foreground/70">
          <div>
            <p className="font-semibold text-foreground mb-1">Vulnerable Code:</p>
            <code className="block bg-background/50 p-2 rounded text-xs font-mono">
              SELECT * FROM users WHERE username = '{username}' AND password = '{password}'
            </code>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">With Injection:</p>
            <code className="block bg-background/50 p-2 rounded text-xs font-mono">
              SELECT * FROM users WHERE username = 'admin' -- AND password = ''
            </code>
            <p className="text-xs text-foreground/60 mt-1">The -- comments out the password check</p>
          </div>
        </div>
      </div>

      {/* Prevention */}
      <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
        <h4 className="font-semibold text-primary mb-2">Prevention Methods:</h4>
        <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
          <li>Use parameterized queries / prepared statements</li>
          <li>Use ORM frameworks (Prisma, SQLAlchemy)</li>
          <li>Input validation and sanitization</li>
          <li>Principle of least privilege for database accounts</li>
          <li>Use Web Application Firewalls (WAF)</li>
        </ul>
      </div>
    </div>
  )
}

export default SQLInjectionDemo
