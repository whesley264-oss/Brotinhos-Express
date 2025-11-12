function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12">Estamos prontos para atender você</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  📍
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Endereço</h4>
                  <p className="text-gray-600">Rua das Pizzas, 123 - Centro<br />São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  📞
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Telefone</h4>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ⏰
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Seg - Dom: 18h às 23h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
