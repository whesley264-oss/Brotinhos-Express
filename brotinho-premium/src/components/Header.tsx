function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/img/logo.png" alt="Brotinho Premium" className="h-12 w-12" />
            <span className="text-2xl font-bold text-red-600">Brotinho Premium</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition">Início</a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 transition">Cardápio</a>
            <a href="#combos" className="text-gray-700 hover:text-red-600 transition">Combos</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contato</a>
          </nav>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            Peça Agora
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
