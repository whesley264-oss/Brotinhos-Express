function Reviews() {
  const reviews = [
    {
      name: 'Maria Silva',
      rating: 5,
      comment: 'Melhor pizza da região! Massa crocante e ingredientes frescos.',
      date: '2 dias atrás'
    },
    {
      name: 'João Santos',
      rating: 5,
      comment: 'Atendimento excelente e entrega rápida. Super recomendo!',
      date: '1 semana atrás'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      comment: 'Pizza artesanal de verdade! Vale cada centavo.',
      date: '2 semanas atrás'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">O Que Dizem Nossos Clientes</h2>
        <p className="text-center text-gray-600 mb-12">Avaliações reais de quem já provou</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
