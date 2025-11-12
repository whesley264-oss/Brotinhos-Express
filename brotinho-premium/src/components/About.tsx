function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre a Brotinho Premium</h2>
            <p className="text-gray-600 mb-4">
              Há mais de 10 anos levando sabor e qualidade para sua casa. Nossa pizzaria nasceu 
              do sonho de criar pizzas artesanais autênticas, com ingredientes selecionados e 
              receitas tradicionais.
            </p>
            <p className="text-gray-600 mb-4">
              Cada pizza é preparada com carinho e atenção aos detalhes. Nossa massa é feita 
              diariamente, fermentada naturalmente por 48 horas, garantindo leveza e sabor único.
            </p>
            <p className="text-gray-600 mb-6">
              Trabalhamos apenas com fornecedores de confiança, priorizando ingredientes frescos 
              e de alta qualidade. Nosso compromisso é com a sua satisfação!
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">10+</div>
                <div className="text-gray-600">Anos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50k+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">4.9</div>
                <div className="text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>
          <div>
            <img src="/img/hero-pizza.jpg" alt="Sobre nós" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
