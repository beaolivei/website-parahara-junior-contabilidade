
import React from 'react';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-green-700 text-white p-8 rounded-lg shadow-xl">
    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
    <div className="font-bold text-green-200">{testimonial.name}</div>
    <div className="text-sm text-green-300">{testimonial.role}</div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: 'A assessoria do Parajara foi um divisor de águas na gestão da nossa fazenda. Finalmente temos clareza sobre nossos números e conseguimos um planejamento tributário que nos economizou muito.',
      name: 'João da Silva',
      role: 'Pecuarista - Corumbá, MS',
    },
    {
      quote: 'Desde que a Junior Contabilidade assumiu nossa parte fiscal, temos muito mais tranquilidade para focar na produção. O atendimento é ágil e eles realmente entendem do nosso setor.',
      name: 'Família Andrade',
      role: 'Produtores de Soja - Dourados, MS',
    },
    {
      quote: 'Recomendo a todos os produtores da região. A equipe é extremamente competente e profissional, transformando a contabilidade de uma obrigação em uma ferramenta de gestão estratégica.',
      name: 'Carlos Berrante',
      role: 'Fazenda Rio Negro - Aquidauana, MS',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">O que dizem nossos clientes</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">A confiança e o sucesso de quem trabalha conosco é a nossa maior recompensa.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
