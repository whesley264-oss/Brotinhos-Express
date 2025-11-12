function MenuProducts() {
  const pizzas = [
    { name: 'Calabresa', image: '/img/calabresa.jpg', price: 'R$ 45,00', description: 'Calabresa artesanal, cebola e azeitonas' },
    { name: 'Frango Catupiry', image: '/img/frango-catupiry.jpg', price: 'R$ 48,00', description: 'Frango desfiado e catupiry original' },
    { name: 'Margherita', image: '/img/margherita.jpg', price: 'R$ 42,00', description: 'Molho de tomate, mussarela e manjericão' },
    { name: 'Portuguesa', image: '/img/portuguesa.jpg', price: 'R$ 50,00', description: 'Presunto, ovos, cebola e azeitonas' },
    { name: '4 Queijos', image: '/img/4-queijos.jpg', price: 'R$ 52,00', description: 'Mussarela, provolone, gorgonzola e parmesão' },
    { name: 'Pepperoni', image: '/img/pepperoni.jpg', price: 'R$ 55,00', description: 'Pepperoni premium e mussarela' },
    { name: 'Bacon', image: '/img/bacon.jpg', price: 'R$ 48,00', description: 'Bacon crocante e mussarela' },
    { name: 'Vegetariana', image: '/img/vegetariana.jpg', price: 'R$ 46,00', description: 'Legumes frescos e mussarela' },
  ]

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nosso Cardápio</h2>
        <p className="text-center text-gray-600 mb-12">Pizzas artesanais feitas com ingredientes selecionados</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
              <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">{pizza.price}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuProducts
