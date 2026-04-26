'use client';

import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, Activity, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Clínica Médica',
    description: 'Check-ups e prevenção para manter sua saúde sempre em dia.',
    icon: Stethoscope
  },
  {
    title: 'Cardiologia',
    description: 'Cuidado com o seu coração em cada consulta e exame.',
    icon: HeartPulse
  },
  {
    title: 'Pediatria',
    description: 'Atenção especializada para o desenvolvimento dos pequenos.',
    icon: Activity
  },
  {
    title: 'Dermatologia',
    description: 'Saúde e estética da pele com tratamentos personalizados.',
    icon: Sparkles
  },
  {
    title: 'Ortopedia',
    description: 'Mobilidade e reabilitação com foco em qualidade de vida.',
    icon: ShieldCheck
  },
  {
    title: 'Nutrologia',
    description: 'Qualidade de vida e alimentação para seu bem-estar diário.',
    icon: Leaf
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-600">Especialidades</p>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-950">Serviços pensados para oferecer um atendimento completo.</h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
          Conheça nossas áreas de atuação e encontre a especialidade que combina com o cuidado que você precisa.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-soft transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl sm:rounded-3xl bg-brand-50 text-brand-600 shadow-sm">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
