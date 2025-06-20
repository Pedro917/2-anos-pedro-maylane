'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

interface HeartParticle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([])

  useEffect(() => {
    const createHeart = (): HeartParticle => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: 100 + Math.random() * 20,
      size: 20 + Math.random() * 30,
      speed: 0.5 + Math.random() * 1,
      opacity: 0.3 + Math.random() * 0.4,
    })

    const initialHearts = Array.from({ length: 15 }, createHeart)
    setHearts(initialHearts)

    const interval = setInterval(() => {
      setHearts((prev: HeartParticle[]) => {
        const updated = prev.map((heart: HeartParticle) => ({
          ...heart,
          y: heart.y - heart.speed,
          opacity: heart.opacity - 0.005,
        })).filter((heart: HeartParticle) => heart.y > -10 && heart.opacity > 0)

        if (updated.length < 15) {
          updated.push(createHeart())
        }

        return updated
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart: HeartParticle) => (
        <div
          key={heart.id}
          className="absolute text-romantic-400 floating-heart"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  )
} 