import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Construa apps incríveis, em minutos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-gray-600"
            >
              Um estúdio moderno para criar produtos belos e funcionais com velocidade. Design elegante, experiência suave e ferramentas que trabalham por você.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
                Começar grátis
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10">
                <Sparkles className="h-4 w-4 text-violet-600" />
                Ver demonstração
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {[
                { label: 'Projetos criados', value: '12k+' },
                { label: 'Satisfação', value: '98%' },
                { label: 'Comunidade', value: '25k+' },
              ].map((stat) => (
                <div key={stat.label} className="">
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-xl p-4"
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500">
                <div className="h-full w-full grid grid-cols-3 gap-3 p-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-white/20 backdrop-blur-sm border border-white/10" />
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-gray-50 border border-gray-200" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
