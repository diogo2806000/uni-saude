'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Carlos Mendes',
    specialty: 'Cardiologista',
    summary: 'Atenção total ao seu coração com acompanhamento preventivo e terapias atualizadas.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dra. Sofia Alencar',
    specialty: 'Pediatra',
    summary: 'Cuidados gentis e confiáveis para crianças em todas as fases do crescimento.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dr. Roberto Nogueira',
    specialty: 'Ortopedista',
    summary: 'Reabilitação eficaz para devolver movimento e liberdade ao seu dia a dia.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dra. Camila Lins',
    specialty: 'Dermatologista',
    summary: 'Tratamentos de pele com foco em saúde, equilíbrio e aparência natural.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dr. Arthur Ferraz',
    specialty: 'Clínico Geral',
    summary: 'Diagnóstico completo e orientações precisas para a sua saúde integral.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dra. Mariana Costa',
    specialty: 'Nutróloga',
    summary: 'Planos alimentares personalizados para uma vida mais saudável e equilibrada.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-600">Corpo Clínico</p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-950">Profissionais que acompanham sua saúde com segurança e empatia.</h2>
      </div>

      <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((doctor, index) => (
          <motion.article
            key={doctor.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white shadow-soft"
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={600}
              height={450}
              className="h-56 sm:h-72 w-full object-cover"
            />
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              <div className="inline-flex rounded-full bg-brand-50 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-brand-700">
                {doctor.specialty}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-950">{doctor.name}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{doctor.summary}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
