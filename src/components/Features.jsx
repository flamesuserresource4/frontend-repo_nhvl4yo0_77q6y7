import { Shield, Rocket, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Rocket,
    title: 'Rápido por padrão',
    desc: 'Fluxo de trabalho otimizado para construir e publicar sem fricção.'
  },
  {
    icon: Shield,
    title: 'Confiável e seguro',
    desc: 'Boas práticas de segurança e qualidade incorporadas desde o início.'
  },
  {
    icon: Star,
    title: 'Design elegante',
    desc: 'Componentes modernos, tipografia limpa e animações suaves.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            O que você ganha
          </h2>
          <p className="mt-3 text-gray-600">
            Tudo que você precisa para lançar com confiança e encantar seus usuários.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-blue-500 text-white shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
