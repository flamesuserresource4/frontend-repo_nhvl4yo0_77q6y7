export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe Studio. Todos os direitos reservados.</p>
        <div className="flex items-center gap-5 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Termos</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  )
}
