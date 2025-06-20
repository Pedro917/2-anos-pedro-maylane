'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Heart } from 'lucide-react'

export default function DayCounter() {
  const [daysTogether, setDaysTogether] = useState(0)
  const [daysDating, setDaysDating] = useState(0)

  useEffect(() => {
    const calculateDays = () => {
      const today = new Date()
      
      // Data de início juntos: 20/03/2023
      const startDateTogether = new Date('2023-02-19')
      const daysTogetherDiff = Math.floor((today.getTime() - startDateTogether.getTime()) / (1000 * 60 * 60 * 24))
      
      // Data de início do namoro: 20/06/2023
      const startDateDating = new Date('2023-06-20')
      const daysDatingDiff = Math.floor((today.getTime() - startDateDating.getTime()) / (1000 * 60 * 60 * 24))
      
      setDaysTogether(daysTogetherDiff)
      setDaysDating(daysDatingDiff)
    }

    calculateDays()
    const interval = setInterval(calculateDays, 1000 * 60 * 60) // Atualiza a cada hora

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-white"
        >
          Nossa Contagem Especial
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contador de dias juntos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700/50"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-pink-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Quando me apaixonei
              </h3>
            </div>
            
            <div className="text-6xl md:text-7xl font-bold text-pink-400 mb-4">
              {daysTogether}
            </div>
            
            <p className="text-lg text-gray-300 mb-2">
              dias
            </p>
            
            <p className="text-sm text-pink-300">
              Desde 19 de fevereiro de 2023
            </p>
          </motion.div>

          {/* Contador de dias namorando */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700/50"
          >
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-pink-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">
                Depois do primeiro SIM!
              </h3>
            </div>
            
            <div className="text-6xl md:text-7xl font-bold text-pink-400 mb-4">
              {daysDating}
            </div>
            
            <p className="text-lg text-gray-300 mb-2">
              dias
            </p>
            
            <p className="text-sm text-pink-300">
              Desde 20 de junho de 2023
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-pink-300 font-medium">
            E cada dia que passa, nosso amor só cresce! 💕
          </p>
        </motion.div>
      </div>
    </section>
  )
} 