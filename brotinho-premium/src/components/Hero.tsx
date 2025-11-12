function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Pizzas Artesanais de Verdade
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Sabor autêntico, ingredientes premium e massa feita na hora
        </p>
        <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
          Ver Cardápio
        </button>
      </div>
    </section>
  )
}

export default Hero
