'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-50">
      <div className="section-container grid gap-8 md:gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-4 sm:space-y-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-brand-600 shadow-sm backdrop-blur"
          >
            <HeartPulse className="h-4 w-4" />
            Atendimento humanizado em Juiz de Fora
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950"
          >
            Cuidado humanizado e tecnologia de ponta para a sua saúde.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-600"
          >
            A Uni Saúde é o seu novo centro de referência médica em Juiz de Fora. Combinamos inovação tecnológica, conforto e um atendimento focado 100% no paciente. Com uma equipe de especialistas dedicados a diversas áreas da medicina, oferecemos um cuidado humanizado e completo para você e sua família, em um ambiente projetado para transmitir paz e segurança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <a
              href="https://wa.me/5532999513176"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-success-500 px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-success-500/20 transition hover:bg-emerald-600 w-full sm:w-auto"
              aria-label="Agendar consulta via WhatsApp"
            >
              <span className="hidden sm:inline animate-pulse rounded-full bg-white/20 px-2 py-1 text-xs uppercase tracking-[0.18em]">WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
              Agendar Consulta
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-800 transition hover:border-brand-200 hover:bg-brand-50 w-full sm:w-auto"
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
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-100/80 to-white/0 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft shadow-slate-400/20 h-[300px] lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              alt="Equipe médica moderna trabalhando com pacientes"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 44vw"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute bottom-4 left-4 lg:bottom-6 lg:left-6 hidden lg:block rounded-2xl lg:rounded-3xl border border-white/70 bg-white/80 px-4 lg:px-5 py-3 lg:py-4 shadow-xl shadow-slate-900/5">
            <p className="text-xs lg:text-sm uppercase tracking-[0.25em] text-slate-500">Uni Saúde</p>
            <p className="mt-1 lg:mt-2 text-base lg:text-lg font-semibold text-slate-900">Conforto e atenção em cada consulta</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
