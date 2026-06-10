'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import XSSPlayground from './xss-playground'
import SQLInjectionDemo from './sql-injection-demo'
import WebAttacksEducation from './web-attacks-education'

interface LabTab {
  id: string
  name: string
  component: React.ReactNode
}

interface InteractiveLabsModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: string
}

const InteractiveLabsModal = ({ isOpen, onClose, initialTab = 'xss' }: InteractiveLabsModalProps) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  const labs: LabTab[] = [
    {
      id: 'xss',
      name: 'XSS Playground',
      component: <XSSPlayground />
    },
    {
      id: 'sqli',
      name: 'SQL Injection',
      component: <SQLInjectionDemo />
    },
    {
      id: 'education',
      name: 'Web Attacks',
      component: <WebAttacksEducation />
    }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-bold">Interactive Security Labs</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border overflow-x-auto bg-card/30">
            {labs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => setActiveTab(lab.id)}
                className={`flex-1 min-w-fit px-6 py-4 font-semibold text-sm transition-all duration-200 ${
                  activeTab === lab.id
                    ? 'border-b-2 border-primary text-primary bg-primary/5'
                    : 'text-foreground/70 hover:text-foreground hover:bg-primary/5'
                }`}
              >
                {lab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {labs.find((lab) => lab.id === activeTab)?.component}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-4 bg-card/30">
            <p className="text-xs text-foreground/60">
              ⚠️ These labs are for educational purposes only. Use your knowledge responsibly and only on systems you own or have permission to test.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveLabsModal
