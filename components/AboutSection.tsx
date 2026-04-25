'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Cpu, BadgeCheck } from 'lucide-react';
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
  },
  {
    title: 'Corpo Clínico Especializado',
    description: 'Profissionais experientes e atualizados em cada especialidade médica.',
    icon: BadgeCheck
  }
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1631217b9201-d7fce8d17c4e?w=800&h=600&fit=crop',
    fallback: 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Ambiente+Acolhedor',
    alt: 'Ambiente acolhedor da clínica Uni Saúde'
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    fallback: 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Recepcao+Moderna',
    alt: 'Recepção moderna da clínica Uni Saúde'
  },
  {
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&h=600&fit=crop',
    fallback: 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Consultorio',
    alt: 'Consultório confortável e iluminado'
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173329f2dba?w=800&h=600&fit=crop',
    fallback: 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Equipe+Medica',
    alt: 'Equipe médica conversando com paciente'
  }
];

function ImageWithFallback({ src, fallback, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallback)}
    />
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="section-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Sobre a clínica</p>
        <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
          A Uni Saúde nasceu da união entre experiência clínica e o desejo de transformar o atendimento em Juiz de Fora.
        </h2>
        <p className="max-w-xl text-base leading-8 text-slate-600">
          Nós combinamos acolhimento humano com segurança técnica para oferecer um ambiente confortável e moderno, onde cada paciente é tratado com respeito e foco na saúde integral.
        </p>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft h-64">
          <ImageWithFallback
            src={images[0].src}
            fallback={images[0].fallback}
            alt={images[0].alt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft h-72">
          <ImageWithFallback
            src={images[1].src}
            fallback={images[1].fallback}
            alt={images[1].alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft h-64">
            <ImageWithFallback
              src={images[2].src}
              fallback={images[2].fallback}
              alt={images[2].alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft h-64">
            <ImageWithFallback
              src={images[3].src}
              fallback={images[3].fallback}
              alt={images[3].alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
