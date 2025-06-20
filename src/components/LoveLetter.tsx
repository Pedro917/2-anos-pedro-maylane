'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X } from 'lucide-react'

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  // Bloquear scroll quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup: restaurar scroll quando componente for desmontado
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleOpenLetter = () => {
    setIsOpen(true)
    setTimeout(() => setShowLetter(true), 500)
  }

  const handleCloseLetter = () => {
    setShowLetter(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleOpenLetter}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-pink-400/30"
        >
          <Heart className="w-6 h-6 group-hover:animate-pulse text-pink-200" />
          Clique aqui para ler a cartinha que eu fiz pra tu
          <Heart className="w-6 h-6 group-hover:animate-pulse text-pink-200" />
        </motion.button>

        <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
                  onClick={handleCloseLetter}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    className="relative w-full max-w-sm sm:max-w-2xl max-h-[90vh] bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-y-auto border border-gray-700/50"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  >
                    <button
                      onClick={handleCloseLetter}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors z-10 text-gray-300 hover:text-white"
                    >
                      <X size={16} />
                    </button>

                    <div className="p-4 md:p-12">
                      <div className="text-center mb-8">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 drop-shadow-lg" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          Para o amor da minha vida
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
                      </div>

                      <AnimatePresence>
      {showLetter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-6 text-gray-200 leading-relaxed"
        >
          {[
            "Oi, amor da minha vida,",
            "Hoje completamos 2 anos como namorados, e foi a melhor decisão que tomei na minha vida. Na verdade, foi até que fácil, pois você sempre se mostrou a pessoa mais incrível do mundo.",
            "Me apaixono por você todos os dias. Te acho incrível de uma forma que você nunca poderia imaginar. Suas qualidades são infinitas, e cada detalhe seu me faz feliz.",
            "Às vezes, talvez a gente sinta que nossa vida está muito corrida, ou que não estamos aproveitando o bastante. Mas fiz esse presente para te mostrar como eu sou feliz ao seu lado, e como a nossa vida é linda juntos.",
            "Se Deus quiser, vamos continuar a colecionar momentos e construir a nossa história.",
            "Te amo muito, muito! Você é a minha mulher.",
            "P.S.: Seu homem.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 1.8, // espaça a entrada dos parágrafos
                duration: 1.2,
              }}
              className="text-lg"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 