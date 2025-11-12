function Combos() {
  const combos = [
    {
      name: 'Combo Família',
      description: '2 Pizzas Grandes + 2L Refrigerante',
      price: 'R$ 89,90',
      discount: '15% OFF'
    },
    {
      name: 'Combo Casal',
      description: '1 Pizza Média + 1L Refrigerante',
      price: 'R$ 54,90',
      discount: '10% OFF'
    },
    {
      name: 'Combo Individual',
      description: '1 Pizza Pequena + 350ml Refrigerante',
      price: 'R$ 32,90',
      discount: '8% OFF'
    }
  ]

  return (
    <section id="combos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Combos Especiais</h2>
        <p className="text-center text-gray-600 mb-12">Economize com nossas promoções</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 relative">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {combo.discount}
              </div>
              <h3 className="text-2xl font-bold mb-3">{combo.name}</h3>
              <p className="text-gray-600 mb-6">{combo.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-red-600">{combo.price}</span>
                <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                  Pedir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Combos
