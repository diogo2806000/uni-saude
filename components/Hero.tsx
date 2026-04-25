'use client';

import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-50">
      <div className="section-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur"
          >
            <HeartPulse className="h-4 w-4" />
            Atendimento humanizado em Juiz de Fora
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Cuidado humanizado e tecnologia de ponta para a sua saúde.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg leading-8 text-slate-600"
          >
            A Uni Saúde traz para Juiz de Fora - MG um novo padrão de atendimento médico. Seu bem-estar é a nossa prioridade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://wa.me/5532999513176"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-success-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-success-500/20 transition hover:bg-emerald-600"
              aria-label="Agendar consulta via WhatsApp"
            >
              <span className="animate-pulse rounded-full bg-white/20 px-2 py-1 text-xs uppercase tracking-[0.18em]">WhatsApp</span>
              Agendar Consulta via WhatsApp
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-brand-200 hover:bg-brand-50"
              aria-label="Conhecer especialidades"
            >
              Conhecer Especialidades
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-100/80 to-white/0 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft shadow-slate-400/20">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              alt="Equipe médica moderna trabalhando com pacientes"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute bottom-6 left-6 hidden rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-xl shadow-slate-900/5 md:block">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Uni Saúde</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Conforto e atenção em cada consulta</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
