"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="flex items-center justify-between w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-semibold">{question}</h3>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="mt-4 text-muted slide-up">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
