import AudioPlayer from "@/components/AudioPlayer";
import FloatingHearts from "@/components/FloatingHearts";
import DayCounter from "@/components/DayCounter";
import LoveLetter from "@/components/LoveLetter";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Player de áudio */}
      <AudioPlayer />
      
      {/* Corações flutuantes */}
      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-200 via-romantic-100 to-romantic-50"></div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-romantic-700 romantic-text mb-8 text-shadow">
            Dois anos com você...
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-romantic-600 romantic-text mb-12 text-shadow">
            e só estamos começando ❤️
          </h2>
          
          <div className="flex justify-center">
            <div className="text-6xl md:text-8xl heartbeat">
              💕
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Galeria de Fotos */}
      {/* <PhotoGallery /> */}

      {/* Carta de Amor */}
      <LoveLetter />

      {/* Contador de Dias */}
      <DayCounter />

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-romantic-800 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg romantic-text">
            Pedro & Maylane
          </p>
          <p className="text-sm mt-2 opacity-80">
            Celebrando o amor todos os dias
          </p>
        </div>
      </footer>
    </main>
  );
}
