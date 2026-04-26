'use client';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 py-6 sm:py-8">
      <div className="section-container">
        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-slate-600">© 2026 Uni Saúde. Todos os direitos reservados.</p>
          <nav className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
            <a href="#top" className="transition hover:text-brand-600 font-medium">Home</a>
            <span className="text-slate-300">•</span>
            <a href="#about" className="transition hover:text-brand-600 font-medium">Sobre</a>
            <span className="text-slate-300">•</span>
            <a href="#services" className="transition hover:text-brand-600 font-medium">Especialidades</a>
            <span className="text-slate-300">•</span>
            <a href="#contact" className="transition hover:text-brand-600 font-medium">Contato</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
