import { Rocket, Star } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-blue-500 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">Vibe Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Recursos</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Planos</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">Sobre</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
          <Star className="h-4 w-4" />
          Começar
        </button>
      </div>
    </header>
  )
}
