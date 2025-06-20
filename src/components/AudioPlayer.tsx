'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) 
  const [volume, setVolume] = useState(0.2)
  const [isMuted, setIsMuted] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(0.2)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // Inicia o áudio automaticamente quando o componente monta
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0 // Começa com volume 0
      audioRef.current.play().then(() => {
        fadeInVolume()
      }).catch((error) => {
        console.log('Erro ao reproduzir áudio:', error)
        setIsPlaying(false) // Se falhar, marca como não tocando
      })
    }
  }, []) // Executa apenas uma vez quando o componente monta

  // Função para fade-in gradual do volume
  const fadeInVolume = () => {
    if (!audioRef.current) return
    
    const targetVolume = isMuted ? 0 : volume
    const currentVolume = audioRef.current.volume
    const step = (targetVolume - currentVolume) / 20 // 20 passos para o fade
    
    const fadeInterval = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.volume += step
        
        if ((step > 0 && audioRef.current.volume >= targetVolume) ||
            (step < 0 && audioRef.current.volume <= targetVolume)) {
          audioRef.current.volume = targetVolume
          clearInterval(fadeInterval)
        }
      }
    }, 50) // 50ms entre cada passo
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Inicia com volume baixo e faz fade-in
        audioRef.current.volume = 0
        audioRef.current.play().then(() => {
          fadeInVolume()
        }).catch((error) => {
          console.log('Erro ao reproduzir áudio:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false)
      setVolume(previousVolume)
    } else {
      setPreviousVolume(volume)
      setIsMuted(true)
    }
  }

  return (
    <div className="fixed top-2 left-2 sm:top-4 sm:right-4 sm:left-auto z-50 glass-effect rounded-full p-2 sm:p-3 shadow-lg">
  <audio
    ref={audioRef}
    src="/audio/background-music.mp3"
    loop
    preload="metadata"
  />

  <div className="flex items-center gap-2 sm:gap-3">
    <button
      onClick={togglePlay}
      className="w-11 h-11 min-w-[44px] min-h-[44px] bg-romantic-500 hover:bg-romantic-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
    >
      {isPlaying ? (
        <Pause size={22} className="sm:w-5 sm:h-5 w-5 h-5" />
      ) : (
        <Play size={22} className="sm:w-5 sm:h-5 w-5 h-5" />
      )}
    </button>
  </div>
</div>

  )
}