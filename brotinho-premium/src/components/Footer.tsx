function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brotinho Premium</h3>
            <p className="text-gray-400">
              Pizzas artesanais feitas com amor e ingredientes de qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Início</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-white transition">Cardápio</a></li>
              <li><a href="#combos" className="text-gray-400 hover:text-white transition">Combos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">Sobre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 98765-4321</li>
              <li>contato@brotinhopremium.com.br</li>
              <li>Rua das Pizzas, 123 - Centro</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                W
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brotinho Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
