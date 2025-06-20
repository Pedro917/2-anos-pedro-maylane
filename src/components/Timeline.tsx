'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Heart } from 'lucide-react'

interface TimelineEvent {
  id: number
  title: string
  description: string
  date: string
  image: string
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Onde tudo começou",
    description: "O periodo onde eu bati os olhos em você e me apaixonei, e quando me seguiu pelo trio eletrico, senti que lhe queria pro resto da vida.",
    date: "19/02/2023",
    image: "/images-timeline/temos_alcool_em_comum.jpeg"
  },
  {
    id: 2,
    title: "Primeiro jantar em casa",
    description: "Primeira vez que cozinhamos juntos, e que levou a virar um hábito que eu amo!",
    date: "14/03/2023",
    image: "/images-timeline/primeiro_jantar.jpeg"
  }
  ,{
    id: 3,
    title: "Primeiro passeio",
    description: "Lhe levei para um lugar que sempre achei especial, pegamos 2 pranchas de SUP e remamos até uma boia, prendemos as pranchas e ficamos deitados na água apenas curtindo o momento.",
    date: "15/04/2023",
    image: "/images-timeline/primeiro_mar.jpeg"
  },
  {
    id: 4,
    title: "Só estava esperando o momento certo",
    description: "Nosso primeiro dia dos namorados juntos, mas ainda não estavamos namorando kkk. Estava aguardando o momento certo para pedir, e alguns dias depois fiz um origame pra você com o pedido. A data foi pensada justamente por ser dia 20 que já estavamos juntos no carnaval.",
    date: "12/06/2023",
    image: "/images-timeline/ja_sabia.jpeg"
  },
  {
    id: 5,
    title: "Fugindo da rotina",
    description: "Do nada decidimos ir em guaramiranga de carro, fomos logo cedinho. Chegamos lá e conhecemos a cidade e varias cachoeiras. Foi um passeio muito leve e fugimos da rotina do trabalho. Tudo fica especial do seu lado <3",
    date: "09/09/2023",
    image: "/images-timeline/guaramiranga.jpeg"
  },
  {
    id: 6,
    title: "Nosso Natal",
    description: "Cresci com a lembraça de sempre decorar uma arvore de natal com minha familia, agora ao seu lado eu queria continuar essa tradição, você super apoiou, compramos e montamos nossa arvrinha",
    date: "12/11/2023",
    image: "/images-timeline/primeiro_natal.jpeg"
  },
  {
    id: 7,
    title: "Conhecendo sua familia - Ano Novo!!",
    description: "Finalmente viajamos juntos para a sua cidade natal, conheci sua familia e suas raizes. Amei todos eles, e me senti abraçado por todos.",
    date: "31/12/2023",
    image: "/images-timeline/conheci_sua_historia.jpeg"
  },
  {
    id: 8,
    title: "Aproveitando Juazeiro",
    description: "Sempre escutei varias historias das suas peripecias no Juazeiro e região, nas suas ferias podemos aproveitar mais a cidade com calma, e até conhecer o Padre Cicero.",
    date: "24/02/2024",
    image: "/images-timeline/passeando_nas_suas_raizes.jpeg"
  },
  {
    id: 9,
    title: "Master chefs",
    description: "Comecamos um costume nossos que levamos até os dias de hoje, que é nossso momento de cozinhar juntos nossas marmitas. As vezes escutando musica, as vezes conversando, outras calados, até as vezes na pressa apenas pela obrigação kkk",
    date: "18/03/2024",
    image: "/images-timeline/criando_nossas_tradicoes.jpeg"
  },
  {
    id: 10,
    title: "Amor em todos os momentos",
    description: "Nesse dia você estava tristinha, retraida. Vi que não estava muito bem e queria tentar te alegrar de alguma forma, então decidi lhe levar para jantar fora e conhecer um novo local. Fomos onde hoje é a 'Ruazinha' comemos uma pizza e depois um sorvetin, com isso consegui roubar alguns sorrisos seus.",
    date: "19/05/2024",
    image: "/images-timeline/tentando_alegrar_os_dias_turbulentos.jpeg"
  },
  {
    id: 11,
    title: "Comemorando a vida do meu moh",
    description: "Enfim podemos comemorar o aniversário do meu moh moh. Compramos um bolo muito top e eu fui na Castro e Silva fazer um lindo arranjo de balões, para decorar o aniversário e ser do jeito que você queria.",
    date: "22/06/2024",
    image: "/images-timeline/comemorando_a_vida_do_meu_moh.jpeg"
  },
  {
    id: 12,
    title: "Pequena viagem",
    description: "Pegamos o carrinho e se mandamos para o cumbuco, alugamos um lugar otimo por 2 dias. E conseguimos aproveitar muito a companhia um do outro, visitamos locais bem legais e se divertimos muito no centrinho pela noite.",
    date: "02/11/2024",
    image: "/images-timeline/descansando.jpeg"
  },
  {
    id: 13,
    title: "Casa nova!!",
    description: "Depois de bastante estresse, conseguimos mudar de apartamento e comprar nosso sonhado sofá. Demoramos semanas escolhendo o modelo perfeito para nós, agora ele é um dos nosso locais favoritos para assistirmos nossas series.",
    date: "04/11/2024",
    image: "/images-timeline/casa_nova.jpeg"
  },
  {
    id: 14,
    title: "Virada de ano no apartamento",
    description: "Escolhemos não sair de casa para esperar a virada do ano, pensamos na opção de fazer um jantar e foi perfeito. Compramos vinhos e champanhe, e fizemos nossas superstições.",
    date: "01/01/2025",
    image: "/images-timeline/nosso_ano_novo_privativo.jpeg"
  },
  {
    id: 15,
    title: "Nossa viagem planejada!!",
    description: "Trabalhos muito em 2024, e pensamos em aproveitar as nossas ferias de uma forma diferente do costume. Fizemos uma viagem muito bem planejada, conhecemos São paulo e Rio de Janeiro, foi um sonho realizado ao seu lado. Quero repetir isso para sempre.",
    date: "10/02/2025",
    image: "/images-timeline/descansando_ao_seu_lado.jpeg"
  },
  {
    id: 16,
    title: "Te amo para sempre! 3 dia dos namorados juntos.",
    description: "Fomos comemorar o dia dos namorados de uma forma tranquila, apenas aproveitando a compahia um do outro, passeando no iguatemi e provando novos sabores. No final da noite voltamos para casa no nosso carro novo e assistimos as series que gostamos!",
    date: "10/02/2025",
    image: "/images-timeline/te_amo_pra_sempre.jpeg"
  }
]

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const handleOpenModal = (event: TimelineEvent) => {
    setSelectedEvent(event)
  }

  const handleCloseModal = () => {
    setSelectedEvent(null)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Nossa História de Amor
        </motion.h2>

        <div className="relative">
          {/* Linha da timeline */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-pink-600 rounded-full shadow-lg"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className={`relative flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Conteúdo do evento */}
              <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'} mt-10 sm:mt-0`}>
                <motion.div 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700/50 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleOpenModal(event)}
                >
                  <div className="relative h-44 sm:h-48 mb-4 rounded-lg overflow-hidden border border-gray-600/50">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed text-sm sm:text-base">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-pink-300 font-medium">
                      {event.date}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-pink-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-pink-300 font-medium">
            E essa é apenas o começo da nossa história... 💕
          </p>
        </motion.div>
      </div>

      {/* Modal para mostrar a foto completa */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative w-full max-w-md sm:max-w-4xl bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors z-10 text-gray-300 hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="p-2 sm:p-6">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-pink-300 font-medium text-sm sm:text-base">
                    {selectedEvent.date}
                  </p>
                </div>
                <div className="relative h-60 sm:h-96 md:h-[500px] rounded-xl overflow-hidden border border-gray-600/50">
                  <Image
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 80vw"
                  />
                </div>
                <div className="mt-4 sm:mt-6 p-2 sm:p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                  <p className="text-gray-200 leading-relaxed text-center text-sm sm:text-base">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 