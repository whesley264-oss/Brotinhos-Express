function FAQ() {
  const faqs = [
    {
      question: 'Qual o tempo de entrega?',
      answer: 'O tempo médio de entrega é de 40 a 60 minutos, dependendo da sua localização.'
    },
    {
      question: 'Vocês entregam em quais bairros?',
      answer: 'Entregamos em toda a região metropolitana. Consulte nossa área de cobertura no momento do pedido.'
    },
    {
      question: 'Posso personalizar minha pizza?',
      answer: 'Sim! Você pode adicionar ou remover ingredientes conforme sua preferência.'
    },
    {
      question: 'Qual o valor mínimo para entrega?',
      answer: 'O valor mínimo para entrega é de R$ 30,00.'
    },
    {
      question: 'Vocês aceitam quais formas de pagamento?',
      answer: 'Aceitamos dinheiro, cartão de crédito, débito e PIX.'
    },
    {
      question: 'Tem opções vegetarianas?',
      answer: 'Sim! Temos diversas opções vegetarianas e também podemos adaptar outras pizzas.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Perguntas Frequentes</h2>
        <p className="text-center text-gray-600 mb-12">Tire suas dúvidas</p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
