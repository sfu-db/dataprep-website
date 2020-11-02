import React, { useState, useRef, useEffect } from "react"

const FadeSection: React.FC<React.ReactNode> = ({ children }) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef(children)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  })
  return (
    <div
      className={`fade-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

export default FadeSection
