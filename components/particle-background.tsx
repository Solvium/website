'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = 25
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          size: Math.random() * 8 + 6, // 6-14px - much larger
          color: Math.random() > 0.5 ? '#ff1493' : '#ffffff', // Deep pink or white
          duration: Math.random() * 20 + 15, // 15-35 seconds
          delay: Math.random() * 5 // 0-5 seconds delay
        })
      }
      
      setParticles(newParticles)
    }

    createParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 25 }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
