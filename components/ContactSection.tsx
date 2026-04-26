'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-container bg-brand-50">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Contato & Agendamento</p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Converse com a Uni Saúde e agende sua próxima consulta.</h2>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Preencha o formulário ou escolha um dos nossos canais de contato para receber atendimento personalizado e rápido.
          </p>

          <div className="grid gap-4">
            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 shadow-soft">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-brand-600">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">Telefone / WhatsApp</p>
                  <a href="https://wa.me/5532999513176" className="text-sm sm:text-base text-slate-600 hover:text-brand-600 break-all" aria-label="Ligar para WhatsApp">
                    (32) 99951-3176
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 shadow-soft">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-brand-600">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">Endereço</p>
                  <p className="text-sm sm:text-base text-slate-600">Av. Barão do Rio Branco, 2500 - Centro, Juiz de Fora - MG</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 shadow-soft">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-brand-600">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">Horário</p>
                  <p className="text-sm sm:text-base text-slate-600">Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-soft"
          onSubmit={(event) => event.preventDefault()}
          aria-label="Formulário de contato Uni Saúde"
        >
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-base text-slate-900 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(32) 99951-3176"
                className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-base text-slate-900 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">
                Serviço de interesse
              </label>
              <select
                id="service"
                className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-base text-slate-900 outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
                required
              >
                <option value="">Selecione a especialidade</option>
                <option value="clinica-medica">Clínica Médica</option>
                <option value="cardiologia">Cardiologia</option>
                <option value="pediatria">Pediatria</option>
                <option value="dermatologia">Dermatologia</option>
                <option value="ortopedia">Ortopedia</option>
                <option value="nutrologia">Nutrologia</option>
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl sm:rounded-3xl bg-brand-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
            >
              Solicitar Contato
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
