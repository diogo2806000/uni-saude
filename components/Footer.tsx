'use client';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 py-8">
      <div className="section-container flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Uni Saúde. Todos os direitos reservados.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#top" className="transition hover:text-brand-600">Home</a>
          <a href="#about" className="transition hover:text-brand-600">Sobre</a>
          <a href="#services" className="transition hover:text-brand-600">Especialidades</a>
          <a href="#contact" className="transition hover:text-brand-600">Contato</a>
        </div>
      </div>
    </footer>
  );
}
