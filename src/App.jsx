import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-sky-50 to-blue-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight">Planos simples</h2>
                <p className="mt-2 text-gray-600">Comece grátis e evolua conforme suas necessidades.</p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold">Starter</h3>
                  <p className="mt-1 text-sm text-gray-600">Ideal para explorar e prototipar</p>
                  <div className="mt-6 text-3xl font-bold">R$ 0<span className="text-base font-medium text-gray-500">/mês</span></div>
                  <ul className="mt-6 space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>Projetos ilimitados</li>
                    <li>Componentes base</li>
                    <li>Deploy 1-clique</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">Começar</button>
                </div>
                <div className="rounded-xl border border-violet-300 bg-violet-50 p-6 ring-1 ring-violet-200">
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <p className="mt-1 text-sm text-gray-700">Para quem quer acelerar</p>
                  <div className="mt-6 text-3xl font-bold">R$ 49<span className="text-base font-medium text-gray-600">/mês</span></div>
                  <ul className="mt-6 space-y-2 text-sm text-gray-700 list-disc list-inside">
                    <li>Tudo do Starter</li>
                    <li>Componentes premium</li>
                    <li>Suporte prioritário</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md bg-violet-600 text-white px-4 py-2 text-sm font-medium hover:bg-violet-700">Assinar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
