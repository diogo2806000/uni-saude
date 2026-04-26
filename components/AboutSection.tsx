'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Cpu, BadgeCheck, Home, Activity, Users } from 'lucide-react';
import { useState } from 'react';

const values = [
  {
    title: 'Atendimento Humanizado',
    description: 'Cada atendimento é planejado com empatia e cuidado individualizado.',
    icon: HeartHandshake
  },
  {
    title: 'Equipamentos de Última Geração',
    description: 'Tecnologia avançada para diagnóstico preciso e tratamentos eficazes.',
    icon: Cpu
  }
];

const images = [
  {
    src: '/assets/images/acolhedor.jpg',
    alt: 'Ambiente acolhedor da clínica Uni Saúde',
    icon: Home
  },
  {
    src: '/assets/images/consultorio.jpg',
    alt: 'Consultório confortável e iluminado',
    icon: Activity
  },
  {
    src: '/assets/images/equipe.jpg',
    alt: 'Equipe médica conversando com paciente',
    icon: Users
  }
];

function ImageWithFallback({ src, alt, className, icon: Icon }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-sky-50 rounded-2xl`}>
        <Icon className="h-12 w-12 text-sky-600" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16">
      <section className="mb-16">
        <p className="text-gray-700 leading-relaxed max-w-2xl">Nós combinamos acolhimento humano com segurança técnica para oferecer um ambiente confortável e moderno, onde cada paciente é tratado com respeito e foco na saúde integral.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="col-span-1 md:col-span-1 bg-sky-50 rounded-2xl p-8 shadow-sm flex flex-col justify-center text-center">
          <ImageWithFallback
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-2xl"
            icon={images[0].icon}
          />
        </div>

        <div className="col-span-1 md:col-span-1 rounded-2xl overflow-hidden shadow-sm aspect-square flex items-center justify-center bg-gray-100">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkyMXwwfDF8c2VhcmNofDh8fGRvY3Rvcnx8MHx8fHwxNjc3MTczMjg0&ixlib=rb-4.0.3&q=80&w=400" alt="Médico usando celular" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-1 md:col-span-1 grid grid-cols-1 gap-8">
          <div className="bg-sky-50 rounded-2xl p-8 shadow-sm text-center">
            <ImageWithFallback
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover rounded-2xl"
              icon={images[1].icon}
            />
          </div>
          <div className="bg-sky-50 rounded-2xl p-8 shadow-sm text-center">
            <ImageWithFallback
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover rounded-2xl"
              icon={images[2].icon}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {values.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="bg-sky-50 rounded-2xl p-8 shadow-sm flex flex-col items-start gap-4">
              <div className="p-3 bg-white rounded-full shadow-inner text-sky-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
}
